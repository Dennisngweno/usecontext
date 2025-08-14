import { useContext } from "react"
import { dataContext } from "./Level3";

function Level1() {
    const {name,age,origin,height} = useContext(dataContext);
    // console.log(person);
    return(
        <>
        <h3>Level 1</h3>
            {/* {JSON.stringify(person,null,2)}; */}
            <p>{name}</p>
            <p>{age}</p>
            <p>{origin}</p>
            <p>{height}</p>
        </>
    )
}
export default Level1