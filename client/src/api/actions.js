const API_URL = 'http://127.0.0.1:8000';

export const postAction = async (data) => {
    try {
      const response = await fetch(`${API_URL}/action`, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      return response.json();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
};

export const postRecommendations = async (data) => {
  try {
    const response = await fetch(`${API_URL}/recommendation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};