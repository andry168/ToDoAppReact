import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import taskApi from "../../api/tasks/index.js";

const Task = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await taskApi.getOneTask(id);
        setTask(data);
      } catch (error) {
        console.error("Error fetching task details:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!task) {
    return <div>Loading...</div>;
  }

  const taskCreatedAt = new Date(task.createdAt);
  const formattedCreatedAt = `${taskCreatedAt.getFullYear()}-${taskCreatedAt.getMonth() + 1}-${taskCreatedAt.getDate()}`;

  return (
    <>
      <div className="shadow-lg rounded-xl w-100 p-4 bg-white relative overflow-hidden">
        <a className="w-full h-full block">
          <div className="flex items-center border-b-2 mb-2 py-2">
            <div className="pl-3">
              <div className="font-medium">Title</div>
              <div className="text-gray-600 text-sm">{task.title}</div>
            </div>
          </div>
          <div className="w-full">
            <p className="text-gray-800 text-sm font-medium mb-2">
              Description
            </p>
            <p className="text-gray-800 text-xl font-medium mb-2">
              {task.description}
            </p>
            <p className="text-blue-600 text-xs font-medium mb-2">
              Due: {task.dueDate}
            </p>
            <p className="text-blue-600 text-xs font-medium mb-2">
              Created at: {formattedCreatedAt}
            </p>
          </div>
        </a>
      </div>
    </>
  );
};

export default Task;
