import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL

export const sendMessage = async (templateParams) => {
  try {
    const response = await axios.post(`${API_URL}/send-email/`, {
      templateParams,
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}