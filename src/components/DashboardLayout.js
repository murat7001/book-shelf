import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import { Typography, Button } from '@mui/material';

export default function ButtonAppBar({ children }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', margin: '0', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', verticalAlign: 'center', textAlign: 'center' }}>
            <Link href="/">
              <Typography marginLeft="25px" variant="h6" width={120} sx={{ flexGrow: 1, marginTop: '7px', cursor: 'pointer', color: 'white', textDecoration: 'none' }}>
                BookShelf
              </Typography>
            </Link>
          </Box>

          <Box marginRight="40px">
            <Link href="/add-book">
              <Button sx={{ marginRight: '8px' }} variant="contained">
                Add Book
              </Button>
            </Link>
            <Link href="/signin">
              <Button sx={{ marginRight: '8px' }} variant="contained">
                SignIn
              </Button>
            </Link>
            <Link href="/signup">
              <Button variant="contained">SignUp</Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box marginTop={5} component="main">
        {children}
      </Box>
    </Box>
  );
}
