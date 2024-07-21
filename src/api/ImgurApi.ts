import axios from 'axios';

const IMGUR_CLIENT_ID = 'YOUR_IMGUR_CLIENT_ID';

export const uploadToImgur = async (blob: Blob): Promise<string> => {
  const formData = new FormData();
  formData.append('image', blob);

  try {
    const response = await axios.post('https://api.imgur.com/3/image', formData, {
      headers: {
        Authorization: `Client-ID ${IMGUR_CLIENT_ID}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response.data.success) {
      return response.data.data.link;
    } else {
      throw new Error('Image upload failed');
    }
  } catch (error) {
    console.error('Error uploading image to Imgur:', error);
    throw error;
  }
};