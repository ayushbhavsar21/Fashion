import { createContext, useContext } from "react";

export const BuyerContenxt = createContext({})

export const useBuyer = ()=>{
    return useContext(useBuyer);
}

export const BuyerProvider = BuyerContenxt.Provider();