import {createAsyncThunk} from '@reduxjs/toolkit'
import { axiosInstance } from "../../../config/axiosInstance"
import { toast } from 'react-toastify'

export const loginAction = createAsyncThunk('/auth/login',
    async(credentials,thunkApi)=>{
        try{
        
                let response = await axiosInstance.post("/auth/login",credentials)
                toast.success("Login successfully")
                console.log(response)
                localStorage.setItem("accessToken",response.data.accessToken)
                return response.data
        
        }catch(error){
            toast.error("Login Failed")
            return thunkApi.rejectWithValue("Login Failed")
        }

}
)

export const hydrateAction = createAsyncThunk('/auth/hydrate',
    async(_,thunkApi)=>{
        let token = localStorage.getItem("accessToken")
try{

        let response = await axiosInstance.get("/auth/me",{
            headers: {
    'Authorization': `Bearer ${token}`
  }
        })
        console.log(response)
        return response.data

}catch(error){
    toast.error("Unauthorized User")
    return thunkApi.rejectWithValue("unauthorized user")
}

}
)