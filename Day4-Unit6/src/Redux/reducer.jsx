import { ESS_DATA, UNIQUE, USERS_DATA } from "./action"

let unique = JSON.parse(localStorage.getItem("unique")) || "";



const init_state = {
    userDatas:null,
    essData:[],
    unique:unique
}

export const reducer = (store = init_state,{type,payload})=>{
        if(type == USERS_DATA){
            return {...store,userDatas:payload};
        }else if(type == ESS_DATA){
            return {...store,essData:payload};
        }else if(type == UNIQUE){
            return {...store,unique:payload};
        }else{
            return store;
        }
}