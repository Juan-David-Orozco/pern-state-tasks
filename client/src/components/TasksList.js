import React, { useState, useEffect } from "react";
// import DeleteModal from "./DeleteModal";
//import { useNavigate } from "react-router-dom";
import { Button, Card, CardContent, Typography } from "@mui/material";

export default function TaskList() {

  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const response = await fetch("http://localhost:5000/tasks");
    const data = await response.json();
    console.log(data)
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);



  return (
    <>
      <h1>Tasks List</h1>
      {
        tasks.map((task, index) => (
          <Card
            key={index}
            style={{
              marginBottom: ".7rem",
              backgroundColor: "#1e272e",
            }}
          >
            <CardContent
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{color: "white",}}>
                <Typography>{task.title}</Typography>
                <Typography>{task.description}</Typography>
              </div>
              <div>
                <Button
                  variant="contained"
                  color="inherit"
                  onClick={() => console.log("Actualizando")}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => console.log("Eliminando")}
                  style={{ marginLeft: ".5rem" }}
                >
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))
      }
    </>
  )
}
