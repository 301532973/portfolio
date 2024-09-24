import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const projects = [
  {
    title: 'Blog Platform',
    description: 'A blogging platform that allows users to create, edit, and delete posts, built with React and a RESTful API.',
    imageUrl: '../images/Blog.png'
  },
  {
    title: 'Weather App',
    description: 'A simple weather application that fetches data from a weather API and displays current conditions and forecasts',
    imageUrl: '../images/Weather.png'
  },
  {
    title: 'Personal Portfolio',
    description: 'A responsive portfolio website to showcase my projects and skills, built using React and Bootstrap.',
    imageUrl: '../images/portfolio.png'
  }
];

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="450" // Increase the height here
                image={project.imageUrl}
                alt={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ color: 'white' }}>
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
