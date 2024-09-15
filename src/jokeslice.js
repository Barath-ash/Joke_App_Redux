import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
 


 


const fetchJoke = createAsyncThunk("jokes/jokecategory", async function (category){


    return axios.get(`https://api.chucknorris.io/jokes/random?category=${ category}`).then(function(result){
        console.log(result.data.value)
        return {joke: result.data.value, codevalue: true}
  }
    
        
   

               
    ).catch(function(){
        return { joke: "Category not found", codevalue: false };
    })
})

console.log(fetchJoke)



const initialState = {
    joke: "No jokes yet",
    codevalue: null,
    button:" Get Jokes"
}


const jokeSlice = createSlice({
    name:"joke",
    initialState,
    reducers:{
        
    },
    extraReducers:(build) => {
        build.addCase(fetchJoke.pending, function(state){
             state.button = "Loading...";
        }).addCase(fetchJoke.fulfilled, (state,action) => {
            state.joke = action.payload.joke
            state.codevalue = action.payload.codevalue
            state.button = "Get Jokes";
        })

    }
    

})

export default jokeSlice

 

export {fetchJoke}

 

