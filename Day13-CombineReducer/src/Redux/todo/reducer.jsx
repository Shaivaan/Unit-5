import { ADD_TODO, BLANK_TODO } from "./action"


const init_state = {todo:[]}
export const todoReducer = (store = init_state,{type,payload})=>{
    if(type == ADD_TODO){
        return {...store,todo:[...store.todo,payload]}
    }else if(type == BLANK_TODO){
        return {...store,todo:[]}
    }
      else{ 
        return store;
    }
}