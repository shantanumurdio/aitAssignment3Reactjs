import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ContentContainer = () => {
  const navigate = useNavigate();

  const handleEmployeeCountClick = () => {
    navigate('/employ');
  };

  const handleCompanyDetailsClick = () => {
    navigate('/company');
  };

  return (
    <Container maxWidth="lg" style={{ height: '90vh', display: 'flex', justifyContent: 'center' }}>
      <Box
        sx={{
          marginTop: '50px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '80%',
          width: '90%', // Adjusted width of the main box
          borderRadius: 8,
          border: '1px solid #ccc',
          overflow: 'hidden',
          backgroundColor: 'lightblue',
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
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            cursor: 'pointer',
          }}
        >
          <Box
            onClick={handleEmployeeCountClick}
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
                backgroundColor: 'yellow',
              },
            }}
          >
            Employee Count
          </Box>
          <Box
            onClick={handleCompanyDetailsClick}
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
                backgroundColor: 'yellow',
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
