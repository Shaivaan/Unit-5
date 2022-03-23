import { ADD_COUNT, ADD_TODO } from "./action"
export const reducer=(store,{type,payload})=>{
    if(type == ADD_COUNT){
        return {...store,count:store.count+payload}
    }
    else if(type == ADD_TODO){
        return { ...store , todo: [ ...store.todo , payload]  }

        
    }else{
        return store;
    }
}