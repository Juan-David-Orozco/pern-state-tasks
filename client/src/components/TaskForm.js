import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";

import React, { useEffect, useState } from "react";

export default function TaskForm() {

  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(task)
  }

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
    //console.log(e.target.name, e.target.value);
  }

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
            Create Task
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
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
              >
                Save
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
