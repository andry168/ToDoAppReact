import taskApi from '../../api/tasks/index.js'
import {Link} from "react-router-dom";

const TaskBlock = ( {task} ) => {

    const taskCreatedAt = new Date(task.createdAt);
    const formattedCreatedAt = `${taskCreatedAt.getFullYear()}-${taskCreatedAt.getMonth() + 1}-${taskCreatedAt.getDate()}`;

    const handleSave = async () =>{
      await taskApi.updateTask({
      ...task, isSaved: true
      })
    }
  return (
    <div style={{ background: "#D9D9D9", color: "#000", display: 'flex', flexDirection: 'column', marginBottom: '25px'}}>
      <span style={{ fontSize: "32px", fontWeight: "bold", marginBottom: '10px' }}>{task.title}</span>
      <span>Created at: {formattedCreatedAt}</span>
      <span style={{marginBottom: '5px'}}>Due to: {task.dueDate}</span>
      <button onClick={handleSave}>Save</button>
      <Link to = {'/task/'+ task.id}><button>Details</button></Link>
      
    </div>
  );
};

export default TaskBlock;
