import { ADD_DATA, AUTH } from "./action"

///
let auth = JSON.parse(localStorage.getItem("auth")) || false;

const init_state = {
    data : null,
    auth: auth
}


export const reducer = (store=init_state,{type,payload})=>{
    if(type == ADD_DATA){
        return {...store,data:payload}
    }else if(type == AUTH){
        return{...store,auth:(!store.auth)}
    }
    else{
        return store;
    }
}