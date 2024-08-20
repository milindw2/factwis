import { Accordion, AccordionDetails, AccordionSummary, Box, Button, MenuItem, TextField, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import DeleteDialog from './DeleteDialog';
import Avatar from '@mui/joy/Avatar';
import React, { useEffect, useState } from 'react'
import { Textarea } from '@mui/joy';

const genderOption = ["male", "female", "transgender", "rather not Say"]

export const AccordionItem = ({ user, deleteUser, onChange, expanded, setExpanded }: { user: any, deleteUser: any, onChange: any, expanded: boolean, setExpanded: any }) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [userName, setUserName] = useState({
        first: user.first,
        last: user.last
    });
    const [saveButtonDisabled, setSaveButtonDisabled] = useState(true)

    const handleChangeUserName = (e: any) => {
        e.preventDefault();
        setSaveButtonDisabled(false)
        const [first, last] = e.target.value.split(" ");
        setUserName({ first, last })
    }
    const handleClick = () => {
        if (expanded) {
            setExpanded(false)
        }
    }
    useEffect(() => {
        if (editMode) {
            setExpanded(true)
        }
    }, [editMode])
    return (
        <div>
            <Accordion sx={{ backgroundColor: "#F2F3F3", border: "solid #b3b5b4 1px", margin: 2, }} expanded={expanded} onChange={onChange} onClick={handleClick}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Box sx={{}} >
                            <Avatar size='lg' src={user.picture} />
                        </Box>
                        <Box sx={{ marginLeft: 2, paddingBlock: 2 }} >
                            {!editMode ? <Typography align="left" variant='h4'>{`${userName.first} ${userName.last}`}</Typography> :
                                <TextField id='name' name='username' type='text' label="Name" defaultValue={`${user.first} ${user.last}`} onChange={handleChangeUserName} onClick={(e) => e.stopPropagation()} />}
                        </Box>
                    </Box>
                </AccordionSummary>
                <AccordionDetails >
                    <UserDetails editMode={editMode} setEditMode={setEditMode} user={user} userName={userName} setUserName={setUserName} saveButtonDisabled={saveButtonDisabled} setSaveButtonDisabled={setSaveButtonDisabled} deleteUser={deleteUser} />
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

const UserDetails = ({ editMode, setEditMode, user, userName, setUserName, saveButtonDisabled, setSaveButtonDisabled, deleteUser }: { editMode: boolean, setEditMode: any, user: any, userName: any, setUserName: any, saveButtonDisabled: boolean, setSaveButtonDisabled: any, deleteUser: any }) => {
    const [age, setAge] = useState<number>(0);
    const [selectGender, setSelectedGender] = useState(user.gender);
    const [dialogOpen, setDialogOpen] = useState(false)
    const [country, setContry] = useState(user.country);
    const [description, setDescription] = useState(user.description);
    const calculateAge = ({ birthDate }: { birthDate: string }) => {
        const curruntYear = new Date().getFullYear()
        const curruntMonth = new Date().getMonth();
        const [year, month, day] = birthDate.split("-").map((x) => Number(x));

        console.log(year, month, day, curruntYear)

        return curruntYear - year
    }
    useEffect(() => {
        const birthDate = user.dob
        let calculatedAge = calculateAge({ birthDate })
        setAge(calculatedAge)

    }, [user])

    const handleDelete = (e: any) => {
        e.preventDefault()
        e.stopPropagation()
        setDialogOpen(true)
    }

    const handleEdit = (e: any) => {
        e.preventDefault()
        e.stopPropagation()
        if (age >= 18) {
            setEditMode(!editMode)
        }
    }


    const handleFormSubmit = (e: any) => {
        console.log("handle form submit called")
        e.preventDefault();
        if (e.target.age.value !== "") {

            let ageArr = e.target.age.value.split(" ")
            setAge(Number(ageArr[0]))
        }

        //  if (e.target.username.value !== "") {
        //     const [first, last] = e.target.username.value.split(" ");
        //     setUserName({ first, last });
        // }
        setContry(e.target.country.value)
        setDescription(e.target.description.value)
        setSelectedGender(e.target.gender.value)
        setSaveButtonDisabled(true)
        setEditMode(false)
    }
    return <div className="">

        <Box >
            <form id='userDetails' onSubmit={handleFormSubmit}>
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginInline: 4, }}>
                    <Box>
                        <Typography variant='h5' sx={{ color: "#a2a4a6" }} align="left">Age</Typography>
                        {!editMode ? <Typography align="left" variant='h6'>{`${age}`} Years</Typography> :

                            <TextField id='age' name='age' type='text' label="Age" defaultValue={`${age} Years`} onChange={() => setSaveButtonDisabled(false)} onClick={(e) => e.stopPropagation()} />
                        }
                    </Box>
                    <Box>
                        <Typography variant='h5' sx={{ color: "#a2a4a6" }} align="left">Gender</Typography>
                        {!editMode ? <Typography align="left" variant='h6'>{selectGender}</Typography> :
                            <TextField label="Gender" fullWidth name='gender' defaultValue={selectGender} select placeholder='Gender' onChange={() => setSaveButtonDisabled(false)} onClick={(e) => e.stopPropagation()} >
                                {
                                    genderOption.map((gender) => {
                                        return (
                                            <MenuItem key={gender} value={gender}>{gender}</MenuItem>
                                        )
                                    })
                                }
                            </TextField>}
                    </Box>

                    <Box>
                        <Typography variant='h5' sx={{ color: "#a2a4a6" }} align="left">Country</Typography>
                        {!editMode ? <Typography align="left" variant='h6'>{country}</Typography> :
                            <TextField id='country' name='country' type='text' label="Country" defaultValue={country} onChange={() => setSaveButtonDisabled(false)} onClick={(e) => e.stopPropagation()} />}
                    </Box>
                </Box>
                <Box>
                    <Typography variant='h5' sx={{ color: "#a2a4a6", paddingTop: 2 }} align="left">Description</Typography>
                    {!editMode ? <Typography align='justify' variant="inherit">{description}</Typography>
                        : <Textarea id='description' variant='outlined' name='description' placeholder='Description' defaultValue={description} minRows={2} onChange={() => setSaveButtonDisabled(false)} onClick={(e) => e.stopPropagation()} />
                    }
                </Box>
                {!editMode ? <Box sx={{ display: "flex", justifyContent: "end", paddingRight: 2, paddingTop: 2 }}>
                    <Button onClick={handleDelete}>
                        <DeleteOutlineOutlinedIcon fontSize='large' color="error" />
                    </Button>
                    <Button type="button" onClick={handleEdit}>
                        <CreateOutlinedIcon fontSize='large' color="primary" />
                    </Button>
                </Box>
                    : <Box sx={{ display: "flex", justifyContent: "end", paddingRight: 2, paddingTop: 2 }}>
                        <Button variant="outlined" sx={{ borderColor: "red", borderRadius: "50%", padding: 2, marginRight: 2 }} onClick={() => setEditMode(false)}>
                            <CloseRoundedIcon fontSize='large' color="error" />
                        </Button>
                        <Button type="submit" variant="outlined" sx={{ borderColor: "green", borderRadius: "50%", padding: 2 }} disabled={saveButtonDisabled} >
                            <CheckRoundedIcon fontSize='large' color="success" onClick={(e) => e.stopPropagation()} />
                        </Button>
                    </Box>}
            </form>
        </Box>
        {dialogOpen && <DeleteDialog open={dialogOpen} setOpen={setDialogOpen} deleteUser={deleteUser} />}
    </div>
}


