import axios from "axios";



export const deleteBook = async (id) => {

  try {
    await axios.delete(`http://localhost:3001/books/${id}`);
  } catch (error) {
    alert('Failed to delete book');
    console.error('An error occurred:', error);
  }
};

export const fetchBooks = async () => {
  const response = await axios.get( "http://localhost:3001/books");
  return response.data;
};


export const fetchBookWithSearch = async (searchText, searchBy) => {
  const response = await axios.get(`http://localhost:3001/books/?${searchBy}=${searchText}`)
  return response.data;}