import {  createSlice } from "@reduxjs/toolkit";
import { fetchContacts,addContact, deleteContact } from "./contactsOps";
// export const addContact= createAction("contacts/addContacts")
// export const deleteContact=createAction("contacts/deleteContacts");



const contactSlice=createSlice({
   name:"contacts",
   initialState: {
    items:[],
    loading: false,
    error: null  
   },
    extraReducers:(builder)=>{
      builder.addCase(fetchContacts.pending, (state)=>{
         state.loading=true;
         state.error=null;
      }).addCase(fetchContacts.fulfilled,(state,action)=>{
         state.loading=false;
         state.items=action.payload;
      }).addCase(fetchContacts.rejected,(state)=>{
         state.loading=false;
         state.error=true;
      }).addCase(addContact.pending,(state)=>{
         state.loading=true;
         state.error=null;
      }).addCase(addContact.fulfilled,(state,action)=>{
         state.loading=false;
         state.items.push(action.payload);
      }).addCase(addContact.rejected,(state)=>{
         state.loading=false;
         state.error=true;
      }).addCase(deleteContact.pending,(state)=>{
         state.loading=true;
         state.error=null;
      }).addCase(deleteContact.fulfilled,(state,action)=>{
     
        state.items=state.items.filter((item)=> item.id !== action.payload.id);  
        state.loading=false;
      }).addCase(deleteContact.rejected,(state)=>{
         state.loading=false;
         state.error=true;
      })

    }
})


export default contactSlice.reducer;




// export const contactReducer =(state=initialState.contacts,action)=>{
//    switch (action.type){
//    case "contacts/addContacts":
//       return{
//          ...state,
//          items:[...state.items, action.payload]
//       };
//       case "contacts/deleteContacts":
//          return{
//             ...state,
//             items:state.items.filter((contact)=> contact.id !== action.payload)
//          }

//       default:
//          return state;
      
//    }
// }



/////
//  reducers:{
   //    addContact:(state,action)=>{
   //       return {
   //          ...state,
   //          items:[...state.items, action.payload],
   //       }},
   //    deleteContact:(state,action)=>{
   //       return {
   //          ...state,
   //          items:state.items.filter((contact)=> contact.id !== action.payload)
   //       }
   //    }   
   //  }  