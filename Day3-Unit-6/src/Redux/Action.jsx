export const ADD_DATA = "ADD_DATA";
export const addData = (payload)=>{
    return {type:ADD_DATA,payload}
}

export const IS_AUTH = "IS_AUTH";
export const isAuth = ()=>{
    return {type:IS_AUTH}
}