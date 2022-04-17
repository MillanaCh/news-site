import React from 'react'
import Header from '../components/Commons/Header'
import {useContext, useState} from "react"
import {GeneralAuthContext} from "../context/FirebaseAuthContext"
import {Grid, FormControl, Input, Button} from "@mui/material"
import { Navigate } from 'react-router-dom'

export default function Login() {
  const [seePassword, setSeePassword] = useState(false)
  const [loginToAdmin, setLoginToAdmin] = useState([])
  const {logInWithEmailAndPassword, user} = useContext(GeneralAuthContext)
  const handlerLogin = () => {
    logInWithEmailAndPassword(loginToAdmin.email, loginToAdmin.password)
  }
  //Log in part
  return (
      <>
      {!user ? (
        <>
      <Header/>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl>
            <Input placeholder='write your email' onChange={(e) => setLoginToAdmin({...loginToAdmin,email:e.target.value})}></Input>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <Input type={seePassword ? "text" : "password"} placeholder='write your password' onChange={(e) => setLoginToAdmin({...loginToAdmin,password:e.target.value})}></Input><Button onClick={() => setSeePassword(!seePassword) }>See</Button>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
           <Button onClick={() => handlerLogin()}>Login</Button>
          </FormControl>
        </Grid>
      </Grid>
      </>) : <Navigate to="/admin-dashboard"/>
      }
    </>
  )
}