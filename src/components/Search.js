
import React, { useEffect, useState } from 'react';

import {
    Stack,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Button,
} from '@mui/material';
import { fetchBookWithSearch, fetchBooks } from '@/pages/api/api';
const Search= ({ setBooks })=> {

    const [searchText, setSearchText] = useState('');
    const [searchBy, setSearchBy] = useState('title');

    const fetchBookData = () => {
        const fetchFunction = searchText
            ? fetchBookWithSearch
            : fetchBooks;

        fetchFunction(searchText, searchBy)
            
            .then((bookList) => {
                console.log(searchText,searchBy)
                setBooks(bookList)
                console.log(bookList)

            })
            .catch((error) => {
                console.log(error.message || 'Bir hata oluştu');
            })

    };
    useEffect(() => {
        fetchBookData();
    }, []);
    return (
        <Stack padding={'20px'} width={'90%'} margin={'auto'} alignItems={"flex-start"} direction="row" spacing={2} >
            <FormControl color='info' size="small" sx={{ width: '150px' }} variant='standard'>
                <InputLabel id="demo-simple-select-label">SearchBy</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={searchBy}
                    label="searchBy"
                    onChange={(e) => setSearchBy(e.target.value)}

                >
                    <MenuItem value="title">Title</MenuItem>
                    <MenuItem value="author">Author</MenuItem>
                </Select>

            </FormControl>
            <TextField sx={{ color: "white" }}
                id="outlined-basic"
                label="Search"
                variant="filled"
                size="small"
                fullWidth
                placeholder="Enter search text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <Button sx={{ backgroundColor: "green", color: "white", padding: "10px" }}
                variant="contained"
                color="primary"
                onClick={fetchBookData}

            >
                Search
            </Button>
        </Stack>
    )
}

export default Search