import {useEffect,useState} from "react";

export default function Clock() {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);
    return <div className='d-flex justify-content-center align-content-center'>
        <h1>Current time: {time.toLocaleTimeString()}</h1>
    </div>
}