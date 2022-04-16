import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../images/logo2.png"
import {Grid, Box, Typography, CardMedia} from "@mui/material"

export default function Header() {
  return (
   <>
   <Grid container spacing={2} style={{ justifyContent: "space-around", backgroundColor:"black", height:"100px"}}>
      <Grid item xs={4} md={3} style={{display:"flex", alignItems:"center", textAlign:"center"}}>
        <Link to="/">
          <CardMedia component="img" image={logo} className="img-logo"/>
        </Link>
      </Grid>
      <Grid item xs={8} md={9} className="ul-part">
        <Box sx={{display:"flex", alignItems:"center", textAlign:"center"}}>
            <Link to="/" className="each-ul">Home</Link>
            <Link to="/admin-dashboard" className="each-ul">Dashboard</Link>
            <Link to="/admin-dashboard" className="each-ul">Dashboard</Link>
        </Box>
      </Grid>
    </Grid>
   </>
  )
}