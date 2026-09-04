import { useForm } from "react-hook-form";
import { useNavigate } from "react-router"
import { authApi } from "../api/AuthApi";
import { useDispatch } from "react-redux";
import { addUser } from "../state/authSlice";
import { toast } from "react-toastify";

export const UseAuth = ()=>{
    let navigate =useNavigate()
    let dispatch=useDispatch()

    const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleLogin=async (data)=>{
    console.log("FORM DATA",data)
    let res =await authApi(data)
    dispatch(addUser(res))
    toast.success("successfully login")
      
  
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