import React, {useState} from "react";

function Button(props) {
    const handleClick = () => {
        props.onClickIncrease(props.incValue);
    }
    return <button className='btn-prime' onClick={handleClick}>{props.incValue > 0 ? '+' : ''} {props.incValue}</button>
}

export default function CounterBlock() {

    const [number,setNumber] = useState(0);
    const btnClick =(incValue) => {
        setNumber(number + incValue);
    }

    return (
        <div>
            <Button onClickIncrease={(incValue) => {btnClick(incValue)}} incValue={1}/>
            <Button onClickIncrease={(incValue) => {btnClick(incValue)}} incValue={5}/>
            <Button onClickIncrease={(incValue) => {btnClick(incValue)}} incValue={-100}/>
            <Button onClickIncrease={(incValue) => {btnClick(incValue)}} incValue={25}/>
            <h2 style={{marginLeft:'20px'}}>{number}</h2>
        </div>
    );
}