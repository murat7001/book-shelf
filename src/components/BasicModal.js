import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { deleteBook } from '@/pages/api/api';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 150,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px',
    textAlign: 'center',
};

export default function BasicModal({ id, onDelete }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const deleteHandle = async () => {
        try {
            await deleteBook(id);
            onDelete(id);
            handleClose();
            
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    };
    return (
        <div>
            
            <Button variant="outlined" color="error" onClick={handleOpen}>Delete</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Are you sure?
                    </Typography>
                    <Box sx={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between' }} >
                        <Button onClick={deleteHandle} variant="contained" color="error" >Yes</Button>
                        <Button onClick={handleClose} variant="contained" color="success" >No</Button>
                    </Box>
                    
                </Box>
                
            </Modal>
        </div>
    );
}