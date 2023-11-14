import {
  Button,
  Grid,
  Stack,
} from '@mui/material';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import Item from '@/components/Item';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000000',
    },
  },
});

const Home = () => {
  const [books, setBooks] = useState([]);
  const [deleteMessage, setDeleteMessage] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3001/books')
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => console.error('error :>> ', error));
  }, []);
  const onDelete = (deletedId) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== deletedId));
    setDeleteMessage('Book successfully deleted!');
    setTimeout(() => {
      setDeleteMessage(null);
    }, 3000); // Mesajı 3 saniye sonra kaldır
  };

  return (
    <>

    <ThemeProvider theme={theme}>
      {deleteMessage && (
        <div style={{ color: 'green', marginTop: '10px' }}>
          {deleteMessage}
        </div>
      )}
      
      <Stack width={"90%"} margin={"auto"} container spacing={3} direction={"row"} justifyContent="space-around" useFlexGap   >
        {books &&
          books.map((book) => (
            <Grid width={500}  item key={book.id} xs={12} sm={6} md={4}>
              <Item onDelete={onDelete} book={book}></Item>
            </Grid>
          ))}
      </Stack>
    </ThemeProvider>
  </>

  );
};

export default Home;
