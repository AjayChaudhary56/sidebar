import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Sidebar from '../Component/Sidebar'

const Main = () => {
  return (
    <Box>
    <Grid container column={12} sx={{height:'100vh'}}>
        <Grid item xs={3}  sx={{height:'100%',background:'red'}} >
            <Sidebar/>
        </Grid>
        <Grid item xs={9}>
            <Typography>This is page</Typography>
        </Grid>

    </Grid>
    </Box>
  )
}

export default Main