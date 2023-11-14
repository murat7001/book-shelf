import { Container, Typography, Grid, Box, Card, CardContent, CardMedia } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const BookDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3001/books/${id}`)
        .then((response) => {
          setBook(response.data);
        })
        .catch((error) => console.log(error));
    }
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <Container
      maxWidth="md"
      sx={{
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 64px)', 
        overflow: 'hidden', 
        color:"#EFC88B",
      }}
    >
      <Grid sx={{ border: '5px solid #CF5C36', borderRadius:"10px", backgroundColor:"#050517" }} container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ marginBottom: '20px', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              height="400"
              image={book.imgUrl ?? 'https://picsum.photos/200/300'}
              alt={book.title}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Typography variant="h4" gutterBottom>
              {book.title}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Author: {book.author}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Price: {book.currency} {book.price}
            </Typography>
            <Typography variant="body1">{book.description}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BookDetail;
