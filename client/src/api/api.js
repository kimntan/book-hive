import axios from "axios";

export class BookSiteApi {
  constructor(baseURL) {
    this.baseURL = baseURL || process.env.REACT_APP_SERVER_URL;
  }

  async getBooks() {
    try {
      const response = await axios.get(`${this.baseURL}/books`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getBooksById(bookId) {
    try {
      const response = await axios.get(`${this.baseURL}/books/${bookId}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getbooksByGenre(genre) {
    try {
      const response = await axios.get(`${this.baseURL}/genre/${genre}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  async addBook(newBook) {
    try {
      const response = await axios.post(`${this.baseURL}/books`, newBook);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
