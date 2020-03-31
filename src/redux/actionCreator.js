export function toggleFinish(id){
    return {
        type:"TOGGLE_FINISH",
        id
    };
}

export function deleteTask(id){
    return{
        type:'DELETE_TASK',
        id
    }
}

export function addTask(taskName){
    return{
        type:"ADD_TASK",
        taskName
    }
}

export function getInitData(data){
    return{
        type:INIT_DATA,
        data
    }
}