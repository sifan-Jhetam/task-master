import React from "react"
import Card from 'react-bootstrap/Card';
import { updataTask, DeleteTask } from "../services/fireApi";
import { useColorScheme } from "./DarkMode/colorScheme";
import { Row, Col, Form, Button } from "react-bootstrap";
import { Modal, Select, Space } from "antd";
import { useState } from "react";


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
    let [updateModal, setUpdateModal] = useState(false);



    async function update_task() {

        try {
            await updataTask(data.id, inputData, currentUser.email)
            setUpdateModal(false)
            updater()
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


    let [inputData, setInputData] = useState({
        taskName: data.taskName,
        description: data.description,
        priority: data.priority,
        status: data.status
    })

    function handleTask(e) {
        e.persist()
        setInputData((prev) => {
            let temp = {...prev}
            temp.taskName = e.target.value;
            return temp
        })
    }

    function handleDesc(e) {
        e.persist()
        setInputData((prev) => {
            let temp = {...prev}
            temp.description = e.target.value
            return temp
        })
    }

    function handlePriority(e) {
        setInputData((prev) => {
            let temp = {...prev}
            temp.priority = e
            return temp
        })
    }

    function handleStatus(e) {
        console.log(e)
        setInputData((prev) => {
            let temp = {...prev}
            temp.status = e
            return temp
        })
    }

    //   async function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log(inputData)
    //     try {
    //       await addTask(currentUser.email, inputData)
    //       updater()
    //       setInputData((prev) => {
    //         let temp = prev;
    //         temp.status = "pending"
    //         temp.priority="low"
    //         return temp
    //       })
    //     }
    //     catch (err) {
    //       console.log(err)
    //     }
    //   }



    return (
        <>
            <Card style={{ marginBottom: "20px", backgroundColor: bgcolor, color: color }}>
                <Card.Body>
                    <Row>
                        <Col xs="10" lg="10">
                            <Card.Title>{data.taskName}</Card.Title>
                        </Col>
                        <Col xs="2" lg="2">
                            {data.priority === "high" && <i className="fas fa-dot-circle" style={{ color: "#ff0000" }}></i>}
                        </Col>
                    </Row>
                    <Card.Text>
                        {data.description}
                    </Card.Text>
                    <Card.Link onClick={() => delete_task()} href="#">Delete</Card.Link>
                    <Card.Link onClick={() => setUpdateModal(true)} href="#">Modify</Card.Link>
                </Card.Body>
            </Card>
            {updateModal && (
                <Modal
                    title="Update Task"
                    open="true"
                    onOk={update_task}
                    onCancel={() => setUpdateModal(false)}
                    okText="Update Task"
                    cancelText="cencel"
                    style={{padding:"10px"}}
                >
                    <>
                        <Form >
                            <Row>
                                <Col xs="12" lg="6">
                                    <Form.Group className="mb-3">
                                        <Form.Label>Task</Form.Label>
                                        <Form.Control type="text" value={inputData.taskName} placeholder="Enter Task " onChange={(e) => handleTask(e)} />
                                    </Form.Group>
                                </Col>

                                <Col xs="12" lg="3">
                                    <Form.Label>Priority</Form.Label>
                                    <Space wrap >
                                        <Select
                                            defaultValue="low"
                                            placeholder="Select priority"
                                            style={{ width: 120 }}
                                            value={inputData.priority}
                                            onChange={handlePriority}
                                            options={[
                                                { value: 'low', label: 'low' },
                                                { value: 'medium', label: 'medium' },
                                                { value: 'high', label: 'high' },
                                            ]}
                                        />
                                    </Space>
                                </Col>

                                <Col xs="12" lg="3">
                                    <Form.Label>Status</Form.Label>
                                    <Space wrap >
                                        <Select
                                            defaultValue="pending"
                                            placeholder="Select Status"
                                            value={inputData.status}
                                            style={{ width: 120 }}
                                            onChange={handleStatus}
                                            options={[
                                                { value: 'pending', label: 'pending' },
                                                { value: 'completed', label: 'completed' },

                                            ]}
                                        />
                                    </Space>
                                </Col>

                            </Row>
                            <Form.Group className="mb-3" >
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" value={inputData.description} rows={3} onChange={(e) => handleDesc(e)} />
                            </Form.Group>
                            {/* <Button type="submit">Submit form</Button> */}
                        </Form>

                    </>
                </Modal>
            )}
        </>
    )
}