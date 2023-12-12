import React, { useState } from "react";


const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      title.trim() === "" ||
      dueDate.trim() === "" ||
      description.trim() === ""
    ) {
      alert("Campurile sunt obligatorii!");
      return;
    }

    const newTask = {
      title,
      description,
      dueDate,
      createdAt: new Date().toISOString(),
    };

    onAddTask(newTask);

    setTitle("");
    setDueDate("");
    setDescription("");
  };

  return (
    <>
	<div className="flex justify-center">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title </label>
            <input
              id="title"
              type="text"
              placeholder="Title"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description"> Description </label>
            <textarea
              id="description"
              rows="4"
              placeholder="Write task description"
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="dueDate"> Due Date</label>
            <input
              id="dueDate"
              type="date"
              placeholder="Due Date"
			        value={dueDate}
          		onChange={handleDueDateChange}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
            >
              Add Task
            </button>
          </div>
        </form>
	</div>
    </>
  );
};

export default TaskForm;
