import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import logo from "../../images/logo2.png"
import {Grid, Box, CardMedia} from "@mui/material"
import { GeneralAuthContext } from '../../context/FirebaseAuthContext'
import {RiAdminLine, RiUserFollowLine} from 'react-icons/ri'


export default function Header() {
  const {logOut, user} = useContext(GeneralAuthContext)
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
            <Link to="/about" className="each-ul">About</Link>
            {!user ? (<Link to="/login" className="each-ul"><button className='btn'>Login<RiAdminLine/></button></Link>) : <button className='btn' onClick={() => logOut()}><RiUserFollowLine/></button>}
        </Box>
      </Grid>
    </Grid>
   </>
  )
}



