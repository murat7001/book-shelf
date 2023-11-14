import axios from "axios";



export const deleteBook = async (id) => {

    try {
        await axios.delete(`http://localhost:3001/books/${id}`);
      } catch (error) {
        alert('Failed to delete book');
        console.error('An error occurred:', error);
      }
  };