import React from "react";
import Header from "../components/Commons/Header";
import {Grid, List, ListItemButton, Divider} from "@mui/material"
import { Link, Outlet } from "react-router-dom";
export default function About() {
  return (
    <>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={4} md={2}>
          <List>
            <ListItemButton>
              <Link to="about-us">About us</Link>
            </ListItemButton>
            <Divider/>
            <ListItemButton>
              <Link to="contact-us">Contact Us</Link>
            </ListItemButton>
            <Divider/>
            <ListItemButton>
              <Link to="our-team">Our Team</Link>
            </ListItemButton>
            <Divider/>
            <ListItemButton>
              <Link to="locations">Location</Link>
            </ListItemButton>
            <Divider/>
          </List>
        </Grid>
        <Grid item xs={8} md={10}><Outlet/></Grid>
      </Grid>
    </>
  );
}
