import React, { useState } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Drawer, IconButton, Stack, Typography, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// import { Link } from 'react-router-dom';


function Drawer_bar(props) {

    const [color, setColor] = useState('success')
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true)
    }

    // const HandleChange = () => {
    //     setColor("primary")
    // }
    return (
        // <div className='text-center'>
        //     <h1>Material UI</h1>
        //     <button>Click me</button><br />
        //     <Button
        //     color={color}
        //     variant="contained"
        //     endIcon={<DeleteIcon />}
        //     onClick={HandleChange}
        //     >Click me</Button>
        // </div>

        <Box>
            <IconButton size='large'
                variant='contained'
                onClick={handleClick}>
                <MenuIcon />
            </IconButton>
            <Drawer
                aria-lable='muiDrawer'
                color='primary'
                anchor='left'
                open={open}
                onClose={() => setOpen(false)} >
                <Stack width={200} >
                    <Typography align='center'>
                        <h2>City Hospital</h2>
                    </Typography>
                    <Link href='/' underline='hower'>Home</Link>
                    <Link href='/department' underline='hower'>Department</Link>
                    <Link href='/doctors' underline='hower'>Doctors</Link>
                    <Link href='/about' underline='hower'>About</Link>
                    <Link href='/contact' underline='hower'>Contact</Link>
                    <Link href='/appointment' underline='hower'>Appointment</Link>
                    <Link href='/auth' underline='hower'>Login / Signup</Link>
                </Stack>
            </Drawer>
        </Box>
    );
}

export default Drawer_bar;