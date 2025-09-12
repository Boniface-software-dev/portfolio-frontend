import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
const API = `${BACKEND_URL}/api`;

//Debugging log (only runs in dev mode)
if (import.meta.env.DEV) {
  console.log("Backend URL:", BACKEND_URL);
}


// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    if (error.response) {
      // Server responded with error status
      throw new Error(`Server Error: ${error.response.data?.detail || error.response.statusText}`);
    } else if (error.request) {
      // Request made but no response received
      throw new Error('Network Error: Unable to connect to server');
    } else {
      // Something else happened
      throw new Error(`Request Error: ${error.message}`);
    }
  }
);

// Portfolio API functions
export const portfolioApi = {
  // Get complete portfolio data (recommended for initial load)
  async getCompletePortfolio() {
    try {
      const response = await apiClient.get('/portfolio/complete');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Individual endpoint functions (for future use)
  async getPersonalInfo() {
    const response = await apiClient.get('/portfolio/info');
    return response.data;
  },

  async getSkills() {
    const response = await apiClient.get('/portfolio/skills');
    return response.data;
  },

  async getExperience() {
    const response = await apiClient.get('/portfolio/experience');
    return response.data;
  },

  async getProjects() {
    const response = await apiClient.get('/portfolio/projects');
    return response.data;
  },

  async getEducation() {
    const response = await apiClient.get('/portfolio/education');
    return response.data;
  },

  async getCertifications() {
    const response = await apiClient.get('/portfolio/certifications');
    return response.data;
  },

  // Admin functions (future enhancement)
  async updatePersonalInfo(data) {
    const response = await apiClient.put('/portfolio/info', data);
    return response.data;
  }
};

// Main function to fetch all portfolio data
export const fetchPortfolioData = async () => {
  return await portfolioApi.getCompletePortfolio();
};

export default portfolioApi;