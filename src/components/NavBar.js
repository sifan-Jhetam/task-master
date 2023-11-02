import { Navbar, Container, Button, Alert, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import React from "react";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useColorScheme } from "./DarkMode/colorScheme";



export function NavBar() {

    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()
    let { isDark } = useColorScheme();
    let color = "blue"

    if (isDark) {
        color = "grey"
    }
    else {
        color = "lightblue"
    }

    async function handleLogout() {
        setError("")

        try {
            await logout()
            history.push("/login")
        } catch {
            setError("Failed to log out")
        }
    }

    return (
        <>

            {/* <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand >React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Button className="mx-2" variant="danger" onClick={handleLogout}>
                                LogOut
                            </Button>

                            <Button variant="primary" onClick={() => history.push("task-master/update-profile")} >
                                Update
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}


            <Navbar expand="lg" className="bg-body-tertiary" style={{ backgroundColor: color,  }}>
                <Container>

                    <Navbar.Brand href="#home">Task manager</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse className="basic-navbar-nav justify-content-end">
                    <Nav className="me-auto">
                        <Navbar.Text>
                            Signed in as: <a href="#login">{currentUser.email}</a>
                        </Navbar.Text>

                        <Button className="mx-2" variant="danger" onClick={handleLogout}>
                            LogOut
                        </Button>

                        <Button variant="primary" onClick={() => history.push("task-master/update-profile")} >
                            Update
                        </Button>
                        </Nav>
                        {error && <Alert variant="danger">{error}</Alert>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    
        </>
    )
}