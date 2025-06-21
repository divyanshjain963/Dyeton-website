import fetch from 'node-fetch';

export const handler = async (event, context) => {
  // Handle CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    const { companyName, name, designation, email, countryCode, phoneNumber, message } = JSON.parse(event.body);

    console.log('Received email request:', { companyName, name, email });

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer re_7Mtajhbe_AtdHr3bTYHbwGAz6ey91Xt9w',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Dyeton Paints <onboarding@resend.dev>',
        to: ['sales@dyetonpaints.com'],
        subject: `New Contact Form Submission from ${name} at ${companyName}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Company Name:</strong> ${companyName}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Designation:</strong> ${designation}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${countryCode} ${phoneNumber}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><small>Submitted from Dyeton Paints website</small></p>
        `,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Resend API Error:', errorText);
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({ 
          error: 'Failed to send email', 
          details: errorText 
        })
      };
    }

    const result = await response.json();
    console.log('Email sent successfully:', result);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully',
        id: result.id 
      })
    };

  } catch (error) {
    console.error('Server error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Internal server error', 
        message: error.message 
      })
    };
  }
}; 