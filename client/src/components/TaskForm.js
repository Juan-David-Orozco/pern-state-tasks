import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function TaskForm() {

  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const params = useParams()

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(task)
    console.log(JSON.stringify(task))
    setLoading(true);
    if(params.id) {
      const response = await fetch(`http://localhost:5000/tasks/${params.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(task),
        }
      )
      const data = await response.json();
      console.log(data)
    } else {
      const response = await fetch("http://localhost:5000/tasks",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(task),
        }
      )
      const data = await response.json();
      console.log(data)
    }
    setLoading(false);
    navigate("/");
  }

  const loadTask = async (id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await response.json();
    console.log(data)
    setTask(data);
  }

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    if(params.id){
      console.log(params.id)
      loadTask(params.id);
    }
  }, [params.id]);

  let titleForm = params.id ? "UpdateTask" : "CreateTask"

  return (
    <Grid
      container
      alignItems="center"
      direction="column"
      justifyContent="center"
    >
      <Grid item xs={3}>
        <Card
          sx={{ mt: 5 }}
          style={{
            backgroundColor: "#1E272E",
            padding: "1rem",
          }}>
          <Typography variant="h5" textAlign="center" color="white">
            {titleForm}
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="filled"
                label="Write your Title"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="title"
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
                value={task.title}
              />
              <TextField
                variant="filled"
                label="Write your Description"
                multiline
                rows={4}
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="description"
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
                value={task.description}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={!task.title || !task.description}
              >
                {loading ? (
                  <CircularProgress color="inherit" size={25} />
                ) : (
                  "Save"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
