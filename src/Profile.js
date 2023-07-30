// src/Profile.js

import React from 'react';
import { Avatar, Typography, Box, Button, Grid, List, ListItem, ListItemText } from '@mui/material';

const Profile = () => {
  // Sample data for education, experience, projects, and contact
  const educationData = ['Bachelor of Computer Science', 'XYZ University'];
  const experienceData = ['Frontend Developer', 'ABC Company', '2019 - Present'];
  const projectsData = [
    'Project 1: E-commerce Website',
    'Project 2: Portfolio Website',
    'Project 3: Blogging Application',
  ];
  const contactData = ['Email: john.doe@example.com', 'Phone: (123) 456-7890'];

  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      <Grid item xs={12}>
        <Avatar sx={{ width: 100, height: 100, mb: 2 }} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" sx={{ mb: 1 }}>
          John Doe
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Frontend Developer
        </Typography>
        <Typography variant="body2" sx={{ textAlign: 'center' }}>
          I am a passionate frontend developer with experience in React and Material-UI.
          Feel free to contact me for any web development projects.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" href="#contact">
          Contact Me
        </Button>
        <Button
          variant="contained"
          color="secondary"
          href="path/to/resume.pdf"
          target="_blank"
          download
          sx={{ ml: 2 }}
        >
          Download Resume
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">Education</Typography>
        <List>
          {educationData.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">Experience</Typography>
        <List>
          {experienceData.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">Projects</Typography>
        <List>
          {projectsData.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">Contact</Typography>
        <List>
          {contactData.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default Profile;
