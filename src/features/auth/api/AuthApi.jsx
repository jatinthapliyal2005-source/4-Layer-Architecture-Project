import { axiosInstance } from "../../../config/axiosInstance"
export const authApi =async(credentials)=>{
try{

        let response = await axiosInstance.post("/auth/login",credentials)
        console.log(response)
        localStorage.setItem("accessToken",response.data.accessToken)
        return response.data

}catch(error){
    console.log(error)
}
}

export const hydrateApi =async()=>{

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
    console.log(error)
}
}