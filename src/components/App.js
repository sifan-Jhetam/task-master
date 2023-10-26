import React from "react"
import Signup from "./Signup"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import { NavBar } from "./NavBar"
import { Test } from "./test"
import TaskList from "./TaskList"
import { DarkModeToggle } from "./DarkMode/togler"

function App() {
  return (
    <>
    <div style={{position:"fixed",top:"15px",right:"40px",zIndex:"10"}}>
      <DarkModeToggle />
      </div>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={TaskList} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <PrivateRoute path="/test" component={Test} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
   
    </>
  )
}

export default App
