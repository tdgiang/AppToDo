import {createStore} from 'redux';


const arrTaskReducer=(state=[],action)=>{
    switch (action.type) {
        case "INIT_DATA":
            return action.data;
        case "ADD_TASK":
            return [{
                id:(state.length+1).toString(),
                taskName:action.taskName,
                finish:false
            }].concat(state)
        case "TOGGLE_FINISH":
            return state.map(e=>{
                if(e.id!=action.id) return e;
                return {...e,finish:!e.finish}
            })
        case "DELETE_TASK":
            return state.filter(e=>e.id!=action.id)
        default:
            return state;
    }

}


const store=createStore(arrTaskReducer);
export default store;