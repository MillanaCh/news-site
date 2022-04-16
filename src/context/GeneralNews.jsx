import { createContext } from "react";

//here we will have reducer
export const GeneralNews = createContext([])
const GeneralProvider = ({children}) => {
    const data = {}
    return(
        <GeneralNews.Provider value={data}>
            {children}
        </GeneralNews.Provider>
    )
}
export default GeneralProvider