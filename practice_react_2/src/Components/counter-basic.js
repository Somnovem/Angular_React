import React, {useState} from "react";

export default function CounterBasic () {
    const [number,setNumber] = useState(0);
    const btClick =() => {
        setNumber(number + 1);
    }
    return <button onClick={btClick} className='btn-prime'>{number}</button>
}