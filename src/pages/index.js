import {
  Grid,
  Stack,
} from '@mui/material';
import { useEffect, useState } from 'react';
import Item from '@/components/Item';
import { fetchBooks } from './api/api';
import Search from '@/components/Search';



const Home = () => {
  const [books, setBooks] = useState([]);
  const [deleteMessage, setDeleteMessage] = useState(null);

  const getBooks = async () => {
    const books = await fetchBooks()
    setBooks(books)
  }
  useEffect(() => {
    getBooks()
  }, []);

  const onDelete = (deletedId) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== deletedId));
    setDeleteMessage('Book successfully deleted!');
    setTimeout(() => {
      setDeleteMessage(null);
    }, 3000); 
  };

  return (
    <>
         <Search setBooks={setBooks} />
        {deleteMessage && (
          <div style={{ color: 'green', marginTop: '10px' }}>
            {deleteMessage}
          </div>
        )}

        <Stack width={"90%"} margin={"auto"}  spacing={3} direction={"row"} justifyContent="space-around" useFlexGap   >
          {books &&
            books.map((book) => (
              <Grid width={500} item key={book.id} xs={12} sm={6} md={4}>
                <Item onDelete={onDelete} book={book}></Item>
              </Grid>
            ))}
        </Stack>
    </>

  );
};

export default Home;
