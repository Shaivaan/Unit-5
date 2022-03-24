import { ADD_CHANGE } from "./action"

let status =JSON.parse(localStorage.getItem("status"));

var init_state = {auth:false};
if(status === false){
     init_state = {auth:false};

}else if(status === true){
     init_state = {auth:true};
}
console.log(status);


export const authReducer = (store = init_state,{type,payload})=>{
    if(type == ADD_CHANGE){
        return {...store,auth:(!payload)}
    }else{ 
        return store;
    }
}