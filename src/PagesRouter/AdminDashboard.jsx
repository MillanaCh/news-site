import React, {useContext} from 'react'
import Header from '../components/Commons/Header'
import { GeneralAuthContext } from '../context/FirebaseAuthContext'
import { Navigate, Outlet, Link } from 'react-router-dom'
import {Divider, Button, Grid, List, ListItem, ListItemButton} from "@mui/material"

export default function AdminDashboard() {
  const {user} = useContext(GeneralAuthContext)
  return (
      <>
     {!user ? <Navigate to="/login"/> : 
     <>
      <Header/>
      <Grid container spacing={2}>
        <Grid item xs={4} md={2}>
          <List>
            <ListItemButton>
              <Link to="add-news">Add News</Link>
            </ListItemButton>
            <Divider/>
            <ListItemButton>
              <Link to="see-news">See News</Link>
            </ListItemButton>
            <Divider/>
          </List>
        </Grid>
        <Grid item xs={8} md={10}><Outlet/></Grid>
      </Grid>
      </>
      }
    </>
  )
}