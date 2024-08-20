import { Box, InputAdornment, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SavedSearchIcon from '@mui/icons-material/SavedSearch';

const Searchbar = ({setSearchString}:{setSearchString:any}) => {
    const [searchText, setSearchText] = useState("");
    useEffect(()=>{
       const search = setTimeout(()=>setSearchString(searchText), 2000);
       return ()=> clearTimeout(search)
    },[searchText]);
    
    
  return (
    <Box sx={{marginX:2}}>
        <TextField fullWidth label="search" type='text' 
        InputProps={{
            startAdornment:( <InputAdornment position="start">
                <SavedSearchIcon />
            </InputAdornment>)
        }}
        onChange={(e)=>setSearchText(e.target.value)}
        />
    </Box>
  )
}

export default Searchbar