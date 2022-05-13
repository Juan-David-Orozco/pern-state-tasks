import { BrowserRouter, Route, Routes } from "react-router-dom";

import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";
//import Menu from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TasksList />} />
        <Route path="/tasks/new" element={<TaskForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
