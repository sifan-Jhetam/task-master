import React from "react"
import { useState } from "react"
import { Form, Col, Row, Button } from "react-bootstrap"
import { addTask } from "../services/fireApi"
import { Space, Select } from "antd"

export default function InputForm({ currentUser, updater }) {

  let [inputData, setInputData] = useState({
    taskName: "",
    description: "",
    priority: "low",
    status: "pending"
  })

  function handleTask(e) {
    setInputData((prev) => {
      let temp = prev;
      temp.taskName = e.target.value;
      return temp
    })
  }

  function handleDesc(e) {
    setInputData((prev) => {
      let temp = prev;
      temp.description = e.target.value
      return temp
    })
  }

  function handlePriority(e) {
    setInputData((prev) => {
      let temp = prev;
      temp.priority = e
      return temp
    })
  }

  function handleStatus(e) {
    console.log(e)
    setInputData((prev) => {
      let temp = prev;
      temp.status = e
      return temp
    })
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(inputData)
    try {
      await addTask(currentUser.email, inputData)
      updater()
      setInputData((prev) => {
        let temp = prev;
        temp.status = "pending"
        temp.priority = "low"
        return temp
      })
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col xs="12" lg="6">
            <Form.Group className="mb-3">
              <Form.Label>Task</Form.Label>
              <Form.Control type="text" placeholder="Enter Task " onChange={(e) => handleTask(e)} />
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
          <Form.Control as="textarea" rows={3} onChange={(e) => handleDesc(e)} />
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>

    </>
  )
}