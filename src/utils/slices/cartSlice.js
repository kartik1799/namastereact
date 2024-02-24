import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            const data=state.items.filter((i)=>i.id!==action.payload);
            state.items=data;
        },
        clearCart:(state)=>{
            state.items.length=0;
            //return {items:[]}
        }
    }
})

export const {addItem,removeItem,clearCart}=cartSlice.actions;

export default cartSlice.reducer; 