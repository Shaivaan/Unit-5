import { ADD_DATA, IS_AUTH } from "./Action";


const auth = JSON.parse(localStorage.getItem("auth")) || false;


const init_state = {
    user:null,
    auth:auth
}





export const reducer = (store = init_state,{type,payload}) => {
        if(type == ADD_DATA){
            return {...store,user:payload};
        }else if(type == IS_AUTH){ 
            return {...store,auth:!store.auth};
        }else{
            return store;
        }
}