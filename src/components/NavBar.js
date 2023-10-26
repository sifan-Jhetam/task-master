import { Navbar, Container, Button, Alert } from "react-bootstrap";
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
            <nav >
            <Navbar className="bg-body-tertiary" style={{ backgroundColor: color,  }}>
                <Container>

                    <Navbar.Brand href="#home">Task manager</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">{currentUser.email}</a>
                        </Navbar.Text>

                        <Button className="mx-2" variant="danger" onClick={handleLogout}>
                            LogOut
                        </Button>

                        <Button variant="primary" onClick={() => history.push("/update-profile")} >
                            Update
                        </Button>
                        {error && <Alert variant="danger">{error}</Alert>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </nav>
        </>
    )
}