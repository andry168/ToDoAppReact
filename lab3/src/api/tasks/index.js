import api from "../index.js";

export default {
    getTask: (page=1)=>{
        return api.get(`task?page=${page}&limit=10`);
    },
    getOneTask:(id) => {
        return (
            api.get(`task/${id}`)
        )
    },
    createTask: (task)=>{
        return api.post('task',task);
    },
    updateTask: (task) => {
        return api.put(`task/${task.id}`, task)
    },
    getAllTasks: () => {
        return api.get('task')
    }

}