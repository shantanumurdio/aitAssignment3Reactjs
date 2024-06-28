import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, Divider, Typography, Avatar, Box } from '@mui/material';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{ width: 250, flexShrink: 0 }}
      PaperProps={{ sx: { width: 250 } }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '150px', // Adjust height to accommodate image and padding
          padding: '20px',
        }}
      >
        <Avatar
          alt="logo"
          src="https://aitglobalindia.com/wp-content/uploads/2019/07/cropped-AIT-indiaLogo-file-180x180.png"
          sx={{ height: 100, width: 100 , padding: "50px"}}
        />
      </Box>
      <List sx={{ marginTop: "0px" }}>
        <ListItem button onClick={() => handleNavigation('/employ')}>
          <ListItemText
            primary={
              <Typography sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
                Employee Details
              </Typography>
            }
          />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => handleNavigation('/company')}>
          <ListItemText
            primary={
              <Typography sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
                Company Details
              </Typography>
            }
          />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
