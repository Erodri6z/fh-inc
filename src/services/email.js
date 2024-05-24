import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
console.log("API_URL:", API_URL)

export const getMessage = async () => {
  try {
    const response = await axios.get(`${API_URL}/message`)
    return response.data
  } catch (error) {
    console.error('Error fetching message', error);
    throw error;
  }
}


export const getServiceId = async () => {
  try {
    const response = await axios.get(`${API_URL}/serviceId`)
    return response.data
  } catch (error) {
    console.error('Error fetching message', error);
    throw error;
  }
}

export const getTemplateId = async () => {
  try {
    const response = await axios.get(`${API_URL}/templateId`)
    return response.data
  } catch (error) {
    console.error('Error fetching message', error);
    throw error;
  }
}

export const getPublicKey = async () => {
  try {
    const response = await axios.get(`${API_URL}/publicKey`)
    return response.data
  } catch (error) {
    console.error('Error fetching message', error);
    throw error;
  }
}