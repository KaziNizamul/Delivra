/* external imports */
import axios from 'axios';

const triggerWorkflow = async (nodes) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_BE_URL}/api/workflow/trigger`, { nodes });
    return response.data.message;
  } catch (error) {
    throw new Error('Failed to trigger workflow');
  }
};

export { triggerWorkflow };
