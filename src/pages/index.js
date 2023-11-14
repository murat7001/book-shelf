import {
  Button,
  Grid,
} from '@mui/material';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import Item from '@/components/Item';

const theme = createTheme({
  palette: {
    mode: 'dark', // Temayı karanlık modda kullanmak için
    background: {
      default: '#000000', // Arka plan rengi: siyah
    },
  },
});

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/books')
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => console.error('error :>> ', error));
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
      
        <Link href="/add-book">
          <Button variant='contained'>Add Book</Button>
        </Link>
        <Grid container spacing={2} justifyContent="center" alignItems="flex-start">
          {books &&
            books.map((book) => (
              <Grid item key={book.id} xs={12} sm={6} md={4}>
                <Item book={book}></Item>
              </Grid>
            ))}
        </Grid>
      </ThemeProvider>

    </>
  );
};

export default Home;
