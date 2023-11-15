import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';


import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import {
  Stack,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Button,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import { fetchBookWithSearch, fetchBooks } from '@/pages/api/api';

export default function ButtonAppBar({ children }) {

  
  return (
      <Box sx={{ flexGrow: 1 }} >
        <AppBar position="static" color='primary'>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between", margin: "0", alignItems: "center" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" ,verticalAlign: "center", textAlign:"center"}}>
              <Typography marginLeft="25px" variant="h6" width={120} sx={{ flexGrow: 1, marginTop: "7px" }}>
                BookShelf
              </Typography>
              
            </Box>

            <Box marginRight="40px">
              <Link href="/add-book">
                <Button variant='contained'>Add Book</Button>
              </Link>
              <Button color="inherit">Login</Button>
            </Box>

          </Toolbar>
        </AppBar>
        <Box marginTop={5}
          component="main"
        >
          {children}
        </Box>
      </Box>

  );
}