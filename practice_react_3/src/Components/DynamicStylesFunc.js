import {useState} from "react";

export default function DynamicStylesFunc() {
    const [colorState,setColorState] = useState('orange');

    const changeColor = (color) =>  {
        setColorState(color)
    }

    return <div style={{margin:'10px',padding:'10px'}}>
        <div className='container d-flex' style={{gap:'20px'}}>
            <button className='btn btn-primary' onClick={() => changeColor('blue')}>Blue</button>
            <button className='btn btn-danger' onClick={() => changeColor('red')}>Red</button>
            <button className='btn btn-success' onClick={() => changeColor('green')}>Green</button>
        </div>
        <p style={{padding:'10px',fontWeight:'bold',color:'white',textTransform:'capitalize',fontSize:'1.1rem',width:'fit-content',borderRadius:'10px',margin:'10px auto',backgroundColor:colorState}}>{colorState}</p>
    </div>;
}
