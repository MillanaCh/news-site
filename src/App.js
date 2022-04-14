import './App.css';
import {useState, useContext} from "react"
import {GeneralAuthContext} from "./context/FirebaseAuthContext"
import FormProducts from './components/FormProducts';
import AllNews from "./components/News/AllNews"
function App() {
  const [newUser, setNewUser] =useState({email: "", password: ""})
  const [loginUser, setLoginUser] =useState({email: "", password: ""})

  const {createUserWithFirebase, user, logOut, logInWithEmailAndPassword} = useContext(GeneralAuthContext)
  return (
    <div className="App">
      <header className="App-header">
        {/* <div>
          <h1>Register</h1>
          <input onChange={(e) => setNewUser({...newUser, email: e.target.value})} placeholder="type your email"/>
          <input  onChange={(e) => setNewUser({...newUser, password: e.target.value})} placeholder="type your password"/>
          <button onClick={() => createUserWithFirebase(newUser.email, newUser.password)}>Register</button>
        </div>
        <div>
          <button onClick={() => logOut()}>Log out {user?.email}</button>
        </div>
        <div>
          <h1>Log in</h1>
          <input onChange={(e) => setLoginUser({...loginUser, email: e.target.value})} placeholder="type your email"/>
          <input  onChange={(e) => setLoginUser({...loginUser, password: e.target.value})} placeholder="type your password"/>
          <button onClick={() => logInWithEmailAndPassword(loginUser.email, loginUser.password)}>Log In</button>
        </div> */}
        <h1>Form to add product</h1>
        <AllNews/>
        <FormProducts/>
      </header>
    </div>
  );
}

export default App;
