import React from "react"
import Card from 'react-bootstrap/Card';
import { updataTask, DeleteTask } from "../services/fireApi";
import { useColorScheme } from "./DarkMode/colorScheme";
import { Row, Col } from "react-bootstrap";

export default function TaskCard({ data, currentUser, updater }) {

    let { isDark } = useColorScheme()
    let color = ""
    let bgcolor = ""
    if (isDark) {
        color = "white"
        bgcolor = "grey"
    }
    else {
        bgcolor = "white"
        color = "black"
    }

    async function update_task() {
        try {
            await updataTask(data.id, { taskName: "ch", description: "change by call" }, currentUser.email)
        }
        catch (e) {
            console.log(e)
        }
    }
    async function delete_task() {
        try {
            await DeleteTask(data.id, currentUser)
            updater();
        }
        catch (err) {
            console.log(err);
        }
    }

    return (

        <Card style={{ marginBottom: "20px" ,backgroundColor:bgcolor, color:color }}>
            <Card.Body>
               <Row>
                <Col xs="10" lg="10">
                <Card.Title>{data.taskName}</Card.Title>
                </Col>
                <Col xs="2" lg="2">
                {data.priority==="high"&&<i className="fas fa-dot-circle" style={{color: "#ff0000"}}></i>}
                </Col>
                </Row>
                <Card.Text>
                    {data.description}
                </Card.Text>
                <Card.Link onClick={() => delete_task()} href="#">Delete</Card.Link>
                <Card.Link onClick={() => update_task()} href="#">Modify</Card.Link>
            </Card.Body>
        </Card>
    )
}