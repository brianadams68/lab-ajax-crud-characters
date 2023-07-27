const axios = require('axios');

class APIHandler {
  constructor() {
    this.baseURL = 'http://localhost:8000'; 
  }

  async getAllCharacters() {
    try {
      const response = await axios.get(`${this.baseURL}/characters`);
      return response.data;
    } catch (error) {
      console.error('Error fetching all characters:', error);
      throw error;
    }
  }

  async getCharacterById(id) {
    try {
      const response = await axios.get(`${this.baseURL}/characters/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching character with ID ${id}:`, error);
      throw error;
    }
  }

  async createCharacter(characterData) {
    try {
      const response = await axios.post(`${this.baseURL}/characters`, characterData);
      return response.data;
    } catch (error) {
      console.error('Error creating character:', error);
      throw error;
    }
  }

  async deleteCharacterById(id) {
    try {
      const response = await axios.delete(`${this.baseURL}/characters/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting character with ID ${id}:`, error);
      throw error;
    }
  }

  async editCharacterById(id, characterData) {
    try {
      const response = await axios.patch(`${this.baseURL}/characters/${id}`, characterData);
      return response.data;
    } catch (error) {
      console.error(`Error editing character with ID ${id}:`, error);
      throw error;
    }
  }
}

module.exports = APIHandler;

