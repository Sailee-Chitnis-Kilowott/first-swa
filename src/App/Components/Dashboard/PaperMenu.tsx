import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 0
        
        },
      }}
    >
      <Paper elevation={3} style={{width: 800,
          height: 300,marginRight:25}}  />
      
      <Paper elevation={3}  style={{width: 400,
          height: 300 }} />
    </Box>
  );
}