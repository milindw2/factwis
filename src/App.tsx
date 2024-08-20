import React, { useState } from 'react';
import './App.css';
import { Box } from '@mui/material';
import HomePage from './components/HomePage';

function App() {
  const [expanded, setExpanded] = useState(null)
  return (
    <div className="App">
      <Box sx={{padding:4}}>
      {/* <AccordionItem /> */}
      <HomePage />
      </Box>
    </div>
  );
}

export default App;
