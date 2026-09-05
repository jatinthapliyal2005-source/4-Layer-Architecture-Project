import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { useDispatch } from "react-redux";
import { addUser } from "../state/authSlice";
import { loginAction } from "../state/authAction";








export const UseAuth = ()=>{
   let navigate =useNavigate()
   let dispatch = useDispatch()
   
  

    const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleLogin= async(data)=>{
    console.log(data)
    try{
    

    dispatch(loginAction(data))
    

    }catch(error){
      console.log(error)
    }
    

    
   
  
  }
  const handleRegister=(data)=>{
    console.log(data)
  }


    return {
        navigate,
        register,
        handleSubmit,
        errors,
        reset,
        handleLogin,
        handleRegister,
    }
}