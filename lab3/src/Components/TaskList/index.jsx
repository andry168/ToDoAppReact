import React from "react";
import api from "../../api/index.js";
import taskApi from "../../api/tasks/index.js";
import TaskBlock from "../TaskBlock/index.jsx";
import { useState, useEffect } from "react";
import TaskSkeleton from "./TaskSkeleton.jsx";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getList } from "../../Slice/sliceTask.js";

const TaskList = () => {
  const dispatch = useDispatch();
  const taskData = useSelector((state) => state.task.tasks);
  const isLoading = useSelector((state) => state.task.isLoading);

  // const data =  useSelector((state) => state);
  // console.log(data);

  // const [taskList, setTaskList] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [sortedTaskList, setSortedTaskList] = useState();
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(getList());
  }, [page]);

  useEffect(() => {
    setSortedTaskList(taskData);
  }, [taskData]);

  const handleSort = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);

    const sortedList = [...taskData].sort((a, b) => {
      const compareValue = a.title.localeCompare(b.title);
      return sortOrder === "asc" ? compareValue : -compareValue;
    });
    setSortedTaskList(sortedList);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <input
          style={{ flex: "1 1", marginRight: "30px" }}
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
        />
        <button onClick={handleSort}>Sort by title</button>
      </div>
      <div>
        {isLoading ? (
          [...new Array(10)].map((item, i) => (
            <TaskSkeleton style={{ marginBottom: "18px" }} key={i} />
          ))
        ) : taskData.length === 0 ? (
          <p>Nu s-au găsit task-uri.</p>
        ) : (
          sortedTaskList
            .filter((task) =>
              task.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((task) => (
              <div key={task.id}>
                <TaskBlock
                  task = {task}
                />
              </div>
            ))
        )}
      </div>
    </>
  );
};

export default TaskList;
