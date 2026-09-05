import { createSlice } from "@reduxjs/toolkit";
import { hydrateAction, loginAction } from "./authAction";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        user:null,
        isAuthenticated:false,
        isLoading:false,
        
        
    },
    reducers:{
        addUser:(state,action)=>{
            state.user=action.payload
            state.isAuthenticated=true
            state.isLoading=false
            
            
        },
        removeUser:(state,action)=>{
            state.user=null
            state.isAuthenticated=false
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(loginAction.pending,(state,action)=>{
            state.isLoading=true
        })
        .addCase(loginAction.fulfilled,(state,action)=>{
            state.user=action.payload
            state.isAuthenticated=true
            state.isLoading=false
        })
        .addCase(loginAction.rejected,(state,action)=>{
            state.isLoading=false
        })
        .addCase(hydrateAction.pending,(state,action)=>{
            state.isLoading=true
        })
        .addCase(hydrateAction.fulfilled,(state,action)=>{
            state.user=action.payload
            state.isAuthenticated=true
            state.isLoading=false
        })
        .addCase(hydrateAction.rejected,(state,action)=>{
            state.isLoading=false
        })
    }
})
export const {addUser,removeUser}=authSlice.actions
export default authSlice.reducer