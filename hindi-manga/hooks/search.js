import { create } from "zustand";

export const useSearch = create((set)=>(
    {
        search:[],
        
        inputSe:(text)=>set((state)=>({search:[...text]})),
       
    }
))