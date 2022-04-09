import { createContext, useReducer } from "react";

export const RegistrationContext = createContext();
export const RegistrationContextProvider = ({children})=>{


    const init_state = {name:"",age:0,dob:null,residence:null,address:null,pincode:0};
  const reducer = (state,{type,payload})=>{
    if(type == "Name"){
      return {...state,name : payload}
    }else if(type == "Age"){
      return {...state,age : payload}
    }else if(type == "Dob"){
        return {...state,dob:payload}
    }else if(type == "Res"){
        return {...state,residence:payload}
    }else if(type == "Add"){
        return {...state,address:payload}
    }else if(type == "Pin"){
        return {...state,pincode:payload} 
    }
  }


  const [state,dispatch] = useReducer(reducer,init_state);

    return <RegistrationContext.Provider value={{state,dispatch}}>{children}</RegistrationContext.Provider>
}