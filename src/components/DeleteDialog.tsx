import React, { Fragment } from 'react'
import { Button, Dialog, DialogActions, DialogContent, Typography } from '@mui/material'

const DeleteDialog = ({open, setOpen, deleteUser}:{open:boolean, setOpen:any, deleteUser:any}) => {
    
    const handleClose = (e:any) =>{
        e.preventDefault()
        setOpen(false)
        // console.log(open)
    }

    const handleDelete =()=>{
        deleteUser();
        setOpen(false)
    }
  return (
   <Fragment>
    <Dialog 
    open={open}
    onClose={handleClose}

    >
        <DialogContent>
            <Typography>
                Are you sure you want to delete?
            </Typography>
        </DialogContent>

        <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleDelete}>Delete</Button>
        </DialogActions>

    </Dialog>
   </Fragment>
  )
}

export default DeleteDialog