import React, { useState} from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import TaskForm from '../../Components/TaskForm';
import taskApi from '../../api/tasks/index.js';


const AddTaskPage = () => {
  const [taskList, setTaskList] = useState([]);
  const [sortedTaskList, setSortedTaskList] = useState([]);

  const handleAddTask = async (newTask) => {
    try {
      const response = await taskApi.createTask(newTask);

      if (response.status === 200 || response.status === 201) {
        setTaskList([...taskList, response.data]);
        setSortedTaskList([...sortedTaskList, response.data]);
      } else {
        console.error("Eroare la adăugarea task-ului:", response.statusText);
      }
    } catch (error) {
      console.error("Eroare la adăugarea task-ului:", error.message);
    }
  };

  return (

        <TaskForm onAddTask={handleAddTask}/>
  );
};

export default AddTaskPage;