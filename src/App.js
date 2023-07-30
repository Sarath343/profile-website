// src/App.js

import React from 'react';
import { Container, Paper, Button, AppBar, Toolbar, Typography, Grid } from '@mui/material';
import Profile from './Profile';

function App() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">My Profile</Typography>
        </Toolbar>
      </AppBar>
      <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <AppBar position="static" color="default">
              <Toolbar sx={{ justifyContent: 'space-between' }}>
                <div>
                  <Button color="inherit" href="#home">
                    Home
                  </Button>
                  <Button color="inherit" href="#about">
                    About
                  </Button>
                  <Button color="inherit" href="#education">
                    Education
                  </Button>
                  <Button color="inherit" href="#experience">
                    Experience
                  </Button>
                  <Button color="inherit" href="#projects">
                    Projects
                  </Button>
                  <Button color="inherit" href="#contact">
                    Contact
                  </Button>
                </div>
              </Toolbar>
            </AppBar>
          </Grid>
          <Grid item xs={12}>
            <Profile />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default App;
