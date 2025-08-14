import { createContext } from "react"
import level2 from "./Level2";
import Level2 from "./Level2";
const dataContext = createContext();
const AuthContext = createContext();
const data = {
    name: "Jazmine",
    age: 20,
    origin: "Africa",
    height: "5.3"
}
function Level3() {
    
    return(
        <>
            <h1>Level 3</h1>
            <dataContext.Provider value={data}>
            < Level2 />
            </dataContext.Provider>
        
        </>
    )
};
export default  Level3
export { dataContext }