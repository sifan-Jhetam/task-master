import React from "react"
import { NavBar } from "./NavBar"
import { getData } from "../services/fireApi"
import { useEffect } from "react"
import { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import TaskCard from "./TaskCard"
import { Container, Row, Col } from "react-bootstrap"
import InputForm from "./InputForm.js"
import { useColorScheme } from "./DarkMode/colorScheme"
import { SortingList } from "./sortingList"

export default function TaskList() {

    const [task, setTask] = useState([]);
    let [count, setCount] = useState(1);
    const { currentUser } = useAuth()
    const [sorting, setSorting] = useState({
        priority: "default",
        status: "default"
    })
    let { isDark } = useColorScheme();
    let color = ""
    let bgColor=""
    if (isDark) { color = "white"; bgColor="grey" }
    else {color = "black"; bgColor="white"}

    useEffect(() => {
        console.log("innn")
        async function getAllData() {
            try {
                let data = await getData(currentUser.email)
                const dd = data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }))
                console.log(dd)
                setTask(dd)
            }
            catch {
                console.log("some error in data")
            }
        }
        getAllData()
    }, [count])

    // let deleteFromLocalList = (id) => {
    //     console.log("deleet", id)
    //     setTask((prev) => {
    //         return prev.filter((d) => {
    //             console.log(id, "===", d.id)
    //             return id !== d.id
    //         })
    //     })
    // }

    let updater = () => {
        setCount((prev) => prev + 1)
    }


    return (
        <>
            <NavBar />
            <Container >
                <Row  >
                    <Col xs="12" lg="8"
                        style={{ margin: "auto", boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px", 
                        marginBottom: "20px", marginTop: "10px", padding: "20px", backgroundColor: bgColor   }}
                    >
                        <InputForm currentUser={currentUser} updater={updater} />
                    </Col>
                </Row>

                <Row style={{ color: color }}>
                    <SortingList setSorting={setSorting} sorting={sorting} />
                </Row>
                <Row mx={2}>
                    {sorting.priority == "default" && (
                        task.map((d) => {
                            return (
                                <Col key={d.id} xs="12" lg="4">
                                    <TaskCard data={d} currentUser={currentUser} updater={updater} />
                                </Col>)
                        })
                    )}


                    {
                        sorting.priority !== "default" && (

                            task.filter((f) => f.priority === sorting.priority)
                                .map((d) => {
                      
                                    return (
                                        <Col key={d.id} xs="12" lg="4">
                                            <TaskCard data={d} currentUser={currentUser} updater={updater} />
                                        </Col>
                                    )

                                })
                              
                        )
                    }
                </Row>
            </Container>
        </>
    )
}