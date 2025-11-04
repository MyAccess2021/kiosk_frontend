export const gradientButtonStyle = {
  background: 'linear-gradient(90deg, #6c63ff 0%, #8b7bff 100%)',
  color: '#fff',
  borderRadius: '20px',
  textTransform: 'none',
  boxShadow: '0 4px 12px rgba(108, 99, 255, 0.3)',
  transition: 'all 0.3s ease-in-out',
  fontWeight: 600,
  '&:hover': {
    background: 'linear-gradient(90deg, #5b54e8 0%, #7a6aed 100%)',
    boxShadow: '0 6px 14px rgba(108, 99, 255, 0.4)',
    transform: 'translateY(-1px)',
  },
  '&:active': {
    transform: 'scale(0.98)',
    boxShadow: '0 3px 8px rgba(108, 99, 255, 0.3)',
  },
};


// Example usage with MUI Button component:

// 'use client';
// import React from 'react';
// import {  gradientButtonStyle, outlinedGradientButtonStyle } from '@/app/components/ui/buttonStyles'; 
// import Button from '@mui/material/Button';
// export default function Page() {

//   return (
//     <div style={{ padding: 200 }}>
//       <Button sx={gradientButtonStyle}>Gradient Button</Button>
//     </div>
//   );
// }