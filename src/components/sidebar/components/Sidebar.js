import { Box, IconButton, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'
import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined'

const Sidebar = () => {

    const [isCollapsed, setIsCollapsed] = useState(false)
    const [selected, setSelected] = useState('Dashboard')
    return <>
        <Box sx={{
            '& .pro-sidebar': {
                backgroundColor: 'black'
            },
            '& .pro-icon-wrapper': {
                backgroundColor: 'transparent'
            },
            '& .pro-inner-item': {
                padding: '5px 35px 5px 20px'
            },
            '& .pro-inner-item:hover': {
                color: 'gray'
            },
            '& .pro-menu-item.active': {
                color: 'green'
            }
        }}>


        </Box>

    </>

}

export default Sidebar
