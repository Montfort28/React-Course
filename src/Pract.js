import {useState} from "react"

const Pract = () =>{

    const [name, setName] =useState("mont")

    const handleClick= () =>{
        setName("Mugisha")
    }


    return(
   <div>
    <p>my name is {name}</p>
    <button onClick={handleClick}>Click To Change Name</button>
   </div>
    )
}

export default Pract;