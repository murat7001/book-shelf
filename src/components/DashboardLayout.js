import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

export default function ButtonAppBar({ children }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{ backgroundColor: "#121212", margin: "0" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ margin: "0" }}
          >

          </IconButton>
          <Typography marginLeft="25px" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BookShelf
          </Typography>
          <Box marginRight="40px">
            <Link  href="/add-book">
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