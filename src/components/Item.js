
import {
  Typography,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Link as MuiLink,
} from '@mui/material';
import BasicModal from './BasicModal';

const Item = ({ book, onDelete }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={book.imageUrl ?? 'https://picsum.photos/200/300'}
          alt={book.title}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
            {book.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {book.description}...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <MuiLink href={`/books/${book.id}`} underline="none">
          <Button variant="contained" size="small">
            Details
          </Button>
        </MuiLink>
        <MuiLink href={`/edit-books/${book.id}`} underline="none">
          <Button variant="outlined" size="small">
            Edit
          </Button>
        </MuiLink>
        <BasicModal id={book.id} onDelete={onDelete}></BasicModal>
      </CardActions>
    </Card>
  );
};

export default Item;
