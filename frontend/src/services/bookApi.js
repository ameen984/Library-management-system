import { apislice } from "./apiSlice";

export const bookApi=apislice.injectEndpoints({
    endpoints:(builder)=>({
        getBooks:builder.query({
            query:()=>"/books",
            providesTags:["BOOKS"]
        })
    })
})

  export const{useGetBooksQuery}=bookApi