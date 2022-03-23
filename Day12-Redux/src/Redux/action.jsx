export const ADD_COUNT = "ADD_COUNT";
export const addCount=(payload)=>{
    return {type:ADD_COUNT,payload}
}


export const ADD_TODO = "ADD_TODO";
export const addTodo = (todo)=>{
    return {type:ADD_TODO,payload:todo}
}