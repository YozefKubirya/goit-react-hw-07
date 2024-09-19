import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL='https://66b501299f9169621ea52add.mockapi.io'

export const fetchContacts=createAsyncThunk('contacts/fetchAll',
   async (_,thunkAPI)=>{
      try {
         const response= await axios.get('/contacts');
         // console.log(response.data)
         return response.data
      } catch (error) {
         return thunkAPI.rejectWithValue(error.message); 
      }
   }
)
export const addContact=createAsyncThunk("contacts/addContact",async (contacts,thunkAPI)=>{
try {
   const response = await axios.post('/contacts',contacts)
   // console.log(response.data);
   return response.data;
} catch (error) {
   return thunkAPI.rejectWithValue(error.message);
}
})
export const deleteContact=createAsyncThunk("contacts/deleteContact",async (id,thunkAPI)=>{
   try {
      const response = await axios.delete(`/contacts/${id}`)
      console.log(response.data);
      return response.data;
   } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
   }
   })