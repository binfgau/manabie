import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

const MainNavigation = () => {
  return (
    <AppBar
      position='absolute'
      color='default'
      elevation={10}
      sx={{
        position: 'relative',
        borderBottom: (t) => `1px solid ${t.palette.divider}`,
      }}
    >
      <Toolbar>
        <Typography variant='h6' color='inherit' noWrap>
          Manabie Education
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default MainNavigation;
