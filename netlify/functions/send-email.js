const axios = require('axios');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  const { templateParams } = JSON.parse(event.body);

  try {
    const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      user_id: process.env.EMAILJS_USER_ID,
      template_params: templateParams,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully', response: response.data }),
    };
  } catch (error) {
    console.error('Error sending email:', error.response ? error.response.data : error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to send email', error: error.response ? error.response.data : error.message }),
    };
  }
};