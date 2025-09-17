import {useState} from "react"

const Pract = () =>{

    const [name, setName] =useState("mont")

    const handleClick= () =>{
        setName("Mugisha")
    }
    
    const isPalindrome = (x) =>{

        const str = x.toString();
        const rev = str.split("").reverse().join("");
        return str === rev;
    }

    const res= isPalindrome(101)

    return(
   <div>
    <p>my name is {name}   — Palindrome? {res ? "Yes" : "No"}</p>
    <button onClick={handleClick}>Click To Change Name</button>
   </div>
    )
}

export default Pract;