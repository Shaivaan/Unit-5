export const USERS_DATA = "USERS_DATA";
export const addDatas = (payload)=>{
    return {type:USERS_DATA,payload};
}

export const UNIQUE= "UNIQUE";
export const addUnique = (payload)=>{
    return {type:UNIQUE,payload};
}

export const ESS_DATA = "ESS_DATA";
export const addEssData = (payload)=>{
    return {type:ESS_DATA,payload};
}