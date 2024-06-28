import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const ContentContainer = () => {
  return (
    <Container maxWidth="lg" style={{ height: '90vh', display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          marginTop: "50px",
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '80%',
          width: '90%',  // Adjusted width of the main box
          borderRadius: 8,
          border: '1px solid #ccc',
          overflow: 'hidden',
          backgroundColor: "lightblue",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            marginTop: '20px',
            color: '#333',
            fontWeight: 'bold',
          }}
        >
          Welcome to AIT GLOBAL
        </Typography>

        <Box
          sx={{
            marginTop: "20px",
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '100%',
            height: '100%',  
          }}
        >
          <Box
            sx={{
              width: '30%',     
              height: '50%',     
              backgroundColor: '#f0f0f0', 
              borderRadius: 8,
              margin: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#333',      
              fontSize: '1.2rem', 
              fontWeight: 'bold', 
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'background-color 0.3s ease',   
              '&:hover': {
                backgroundColor: '#ddd', 
              },
            }}
          >
            Employee Count
          </Box>
          <Box
            sx={{
              width: '30%',      // Adjusted width of inner boxes
              height: '50%',     // Adjusted height of inner boxes
              backgroundColor: '#f0f0f0', // Lighter gray background
              borderRadius: 8,
              margin: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#333',      // Text color
              fontSize: '1.2rem', // Font size
              fontWeight: 'bold', // Font weight
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Box shadow
              transition: 'background-color 0.3s ease',   // Smooth transition
              '&:hover': {
                backgroundColor: '#ddd', // Darker gray on hover
              },
            }}
          >
            Number Of Projects
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ContentContainer;
