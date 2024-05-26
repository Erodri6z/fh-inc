import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
console.log("API_URL:", API_URL)

// const getEmailJsConfig = async () => {
//   try {
//     const response = await axios.get(`${API_URL}emailjs-config`);
//     return response
//   } catch (error) {
//     console.error('Error fetching Email.js configuration:', error);
//     throw error;
//   }
// }
export const sendMessage = async (templateParams) => {
  try {
    const response = await axios.post(`${API_URL}/send-email`, {
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