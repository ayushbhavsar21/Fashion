import { createContext, useContext } from "react";

export const SellerContenxt = createContext({})

export const useSeller = ()=>{
    return useContext(useSeller);
}

export const SellerProvider = SellerContenxt.Provider();