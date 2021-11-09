import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth'

const Navigation = () => {
    const { user, logOut } = useAuth()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Doctors Portal
                    </Typography>
                    <NavLink to='/apointment' style={{ textDecoration: 'none',  color: "white" }}>
                        <Button color="inherit">Apointment</Button>
                    </NavLink>

                    {user.email ?
                        <>
                            <NavLink to='/dashboard' style={{ textDecoration: 'none', color: "white" }}>
                                <Button color="inherit">Dashboard</Button>
                            </NavLink>
                            <Typography variant="h6" sx={{ fontSize: '16px', color: 'black', mx: 3 }}>{user?.displayName}</Typography>
                            <Button onClick={logOut} color="inherit">LogOut</Button>
                        </>
                        :
                        <NavLink to='/login' style={{ textDecoration: 'none', color: "white" }}>
                            <Button color="inherit">Login</Button>
                        </NavLink>}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;