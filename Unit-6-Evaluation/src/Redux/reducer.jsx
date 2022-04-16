import { ADD_DATA } from "./action"

const init_state = {
    data :null
}
export const reducer = (store=init_state,{type,payload})=>{
    if(type == ADD_DATA){   
        return {...store,data:payload}
    }else{ 
        return store;
    }
}