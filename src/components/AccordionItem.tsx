import { Accordion, AccordionDetails, AccordionSummary, Box, Button,  FormControl,  MenuItem,  TextField, Typography } from '@mui/material'
import  ExpandMoreIcon  from '@mui/icons-material/ExpandMore'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Avatar from '@mui/joy/Avatar';
import React, { useEffect, useState } from 'react'
import { Select, Option, Textarea } from '@mui/joy';

const genderOption = ["Male", "Female", "Transgender","Rather Not Say" ]

export const AccordionItem = ({user}:{user:any}) => {
    const [editMode, setEditMode] = useState<boolean>(false)
  return (
    <div>
        <Accordion sx={{backgroundColor: "#F2F3F3", border:"solid #b3b5b4 1px", margin:2,}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box sx={{display:"flex",  justifyContent:"space-between", alignItems:"center"}}>
                <Box sx={{ }} >
                    <Avatar size='lg' src={user.picture} />
                </Box>
                <Box sx={{marginLeft: 2, paddingBlock:2 }} >

                {/* <Typography variant='h4'>John Doe</Typography> */}
                { !editMode ? <Typography align="left" variant='h4'>{`${user.first} ${user.last}`}</Typography> :
                    <TextField id='name' name='name' type='text' label="Name" defaultValue={`${user.first} ${user.last}`}/>}
                </Box>
            </Box>
            </AccordionSummary>
            <AccordionDetails >
                <UserDetails editMode={editMode} setEditMode={setEditMode} user={user}/>
            </AccordionDetails>
        </Accordion>
    </div>
  )
}

const UserDetails = ({editMode, setEditMode, user}:{editMode:boolean, setEditMode:any, user:any})=>{
    const [age, setAge] = useState<number>(0);
    const [selectGender, setSelectedGender] = useState(user.gender);
    const [ageField, setAgeField] = useState("");
    const [country, setContry] = useState(user.country);
    const [description, setDescription] = useState(user.description);
    // const [input, setInput] = useState({
    //     age: `${age} Years`,
    //     gender: user.gender,
    //     country: user.country,
    //     description: user.description
    // })
    const calculateAge = ({birthDate}:{birthDate:string})=>{
        const curruntYear = new Date().getFullYear()
        const [year, month, day] = birthDate.split("-").map((x)=> Number(x));
        // console.log(year, month, day, curruntYear)
        return curruntYear - year
    }
    useEffect(()=>{
        const birthDate = user.dob
        let calculatedAge = calculateAge({birthDate})
        setAge(calculatedAge)
        
    },[user])

    const handleEdit = ()=>{
        if(age >= 18){
            setEditMode(!editMode)
        }
    }

 
    const handleEditComplete = (e:any)=>{
        console.log("handleEditComplete", e.target)
    }
    return <div className="">
        <Box >
            <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between", marginInline:4, }}>
                <Box>
                    <Typography variant='h5' sx={{color:"#a2a4a6"}} align="left">Age</Typography>
                    { !editMode ? <Typography align="left" variant='h6'>{`${age}`} Years</Typography> :
                    
                    <TextField id='age' name='age' type='text' label="Age"  defaultValue={`${age} Years`}/>
                    }
                </Box>
                <Box>
                    <Typography variant='h5' sx={{color:"#a2a4a6"}} align="left">Gender</Typography>
                   {!editMode ? <Typography align="left" variant='h6'>{selectGender}</Typography> :
                    <TextField label="Gender" fullWidth name='gender' defaultValue={selectGender} select placeholder='Gender' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setSelectedGender(e.target.value)}} > 
                        {
                            genderOption.map((gender)=>{
                                return(
                                    <MenuItem key={gender} value={gender}>{gender}</MenuItem>
                                )
                            })
                        }
                    </TextField>}
                </Box>
               
                <Box>
                    <Typography variant='h5' sx={{color:"#a2a4a6"}} align="left">Country</Typography>
                    {!editMode  ? <Typography align="left" variant='h6'>{user.country}</Typography>:
                    <TextField id='country' name='country' type='text' label="Country" defaultValue={user.country}/>}
                </Box>
            </Box>
            <Box>
                <Typography variant='h5' sx={{color:"#a2a4a6", paddingTop:2}} align="left">Description</Typography>
                {!editMode ?<Typography align='justify' variant="inherit">{user.description}</Typography>
               : <Textarea id='description' variant='outlined' name='description' placeholder='Description' defaultValue={user.description} minRows={2}/>
           }
            </Box>
           { !editMode ? <Box sx={{display:"flex", justifyContent:"end", paddingRight:2, paddingTop:2}}>
                <Button>
                    <DeleteOutlineOutlinedIcon fontSize='large' color="error" />
                </Button>
                <Button onClick={handleEdit}>
                 <CreateOutlinedIcon fontSize='large' color="primary" />
                </Button>
            </Box>
           : <Box sx={{display:"flex", justifyContent:"end", paddingRight:2, paddingTop:2}}>
                <Button variant="outlined" sx={{borderColor:"red", borderRadius: "50%", padding:2, marginRight:2}}  onClick={()=>setEditMode(false)}>
                    <CloseRoundedIcon fontSize='large' color="error" />
                </Button>
                <Button variant="outlined" sx={{borderColor:"green", borderRadius: "50%", padding:2}} onClick={(e)=>handleEditComplete(e)}>
                 <CheckRoundedIcon fontSize='large' color="success" />
                </Button>
            </Box>}
            
        </Box>
    </div>
}
