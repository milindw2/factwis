import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Typography } from '@mui/material'
import  ExpandMoreIcon  from '@mui/icons-material/ExpandMore'
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import Avatar from '@mui/joy/Avatar';
import React from 'react'

export const AccordionItem = () => {
  return (
    <div>
        <Accordion sx={{backgroundColor: "#F2F3F3", border:"solid #b3b5b4 1px", margin:2,}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box sx={{display:"flex",  justifyContent:"space-between", alignItems:"center"}}>
                <Box sx={{ }} >
                    <Avatar size='lg' src='https://randomuser.me/api/portraits/med/men/93.jpg' />
                {/* <img  src='https://randomuser.me/api/portraits/med/men/93.jpg' alt='profile'/> */}
                </Box>
                <Box sx={{marginLeft: 2, paddingBlock:2 }} >

                <Typography variant='h4'>John Doe</Typography>
                </Box>
            </Box>
            </AccordionSummary>
            <AccordionDetails >
                <UserDetails />
            </AccordionDetails>
        </Accordion>
    </div>
  )
}

const UserDetails = ()=>{
    return <div className="">
        <Box >
            <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between", marginInline:4, }}>
                <Box>
                    <Typography variant='h5' sx={{color:"#a2a4a6"}} align="left">Age</Typography>
                    <Typography align="left" variant='h6'>19 Years</Typography>
                </Box>
                <Box>
                    <Typography variant='h5' sx={{color:"#a2a4a6"}} align="left">Gender</Typography>
                    <Typography align="left" variant='h6'>Rather Not Say</Typography>
                </Box>
                <Box>
                    <Typography variant='h5' sx={{color:"#a2a4a6"}} align="left">Country</Typography>
                    <Typography align="left" variant='h6'>India</Typography>
                </Box>
            </Box>
            <Box>
                <Typography variant='h5' sx={{color:"#a2a4a6", paddingTop:2}} align="left">Description</Typography>
                <Typography align='justify' variant="inherit">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quibusdam minus voluptatem velit est excepturi error consequuntur cum et ipsam. Eveniet obcaecati sapiente in! Soluta perferendis voluptate est iste a!</Typography>
            </Box>
            <Box sx={{display:"flex", justifyContent:"end", paddingRight:2, paddingTop:2}}>
                <Button>
                    <DeleteOutlineOutlinedIcon fontSize='large' color="error" />
                </Button>
                <Button>
                 <CreateOutlinedIcon fontSize='large' color="primary" />
                </Button>
            </Box>
        </Box>
    </div>
}
