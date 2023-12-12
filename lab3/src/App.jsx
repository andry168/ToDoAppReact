import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskList from './Components/TaskList/index.jsx';
import Header from './Components/Header/index.jsx';
import Footer from './Components/Footer/index.jsx';
import {Routes, Route} from 'react-router-dom';
import Task from './Components/Task/index.jsx';
import TaskForm from './Components/TaskForm/index.jsx';
import AddTaskPage from './pages/AddTaskPage/index.jsx';
import SavedTasksPage from './pages/SavedTasksPage/index.jsx'

function App() {
  return (
    <>


      <Header />
      <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/new" element={<AddTaskPage />} />
            <Route path="/task/:id" element={<Task />} />
            <Route path="/saved" element={<SavedTasksPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
