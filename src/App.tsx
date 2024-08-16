import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box } from '@mui/material';
import { AccordionItem } from './components/AccordionItem';

function App() {
  return (
    <div className="App">
      <Box sx={{padding:4}}>
      <AccordionItem />
      </Box>
    </div>
  );
}

export default App;
