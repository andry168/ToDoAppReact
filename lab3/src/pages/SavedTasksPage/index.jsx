import React from "react";
import api from "../../api/index.js";
import taskApi from "../../api/tasks/index.js";
import TaskBlock from "../../Components/TaskBlock/index.jsx";
import { useState, useEffect } from "react";
import TaskSkeleton from '../../Components/TaskList/TaskSkeleton.jsx'
import { Link, Navigate, useNavigate } from "react-router-dom";

const SavedTasksPage = () => {
  const navigate = useNavigate();

  const [taskList, setTaskList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [sortedTaskList, setSortedTaskList] = useState();
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await taskApi.getAllTasks(page);
        setTaskList([...taskList, ...data]);
        setSortedTaskList([...taskList, ...data]);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [page]);

  const handleSort = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);

    const sortedList = [...sortedTaskList].sort((a, b) => {
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
        ) : taskList.length === 0 ? (
          <p>Nu s-au găsit task-uri.</p>
        ) : (
          sortedTaskList
            .filter((task) =>
              task.title.toLowerCase().includes(searchTerm.toLowerCase()) && task.isSaved
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

export default SavedTasksPage;
