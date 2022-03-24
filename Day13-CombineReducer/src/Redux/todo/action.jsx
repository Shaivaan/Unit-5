export const ADD_TODO = "ADD_TODO";
export const addTodo = (payload)=>{
    return {type:ADD_TODO,payload}
}


export const BLANK_TODO = "BLANK_TODO";
export const blankTodo = ()=>{
    return {type:BLANK_TODO,payload:[]}
}