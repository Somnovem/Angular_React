import {useState} from "react";

export default function ReactForm() {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
    const [sex, setSex] = useState();

    const handlerSubmit = event => {
        event.preventDefault();
        alert(`Hello, ${username}!\nYour email: ${email}\nYour age: ${age}\nSex: ${sex}`);
    };

    const handlerUsernameChanged = event => {
        let regex = /^[a-zA-Z0-9_]*$/
        if(regex.test(event.target.value)){
            setUsername(event.target.value);
        }
    }

    const handlerEmailChanged = event => {
        let regex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/
        if(regex.test(event.target.value)){
            setEmail(event.target.value);
        }
    }

    const handlerSexChanged = event => {
        let regex = /^[a-zA-Z]*$/
        if(regex.test(event.target.value)){
            setSex(event.target.value);
        }
    }

    const handlerAgeChanged = event => {
        if(event.target.value > 0 && event.target.value < 100){
            setAge(event.target.value);
        }
    }

    return (
        <div style={{margin:'20px',padding:'20px'}}>
            <form onSubmit={handlerSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <div className="input-group">
                        <input type="text" className="form-control" id="username" placeholder="Enter your username" value={username} onChange={handlerUsernameChanged} required/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <div className="input-group">
                        <input type="text" className="form-control" id="email" placeholder="Enter your email" value={email} onChange={handlerEmailChanged} required/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="sex">Sex:</label>
                    <div className="input-group">
                        <input type="text" className="form-control" id="sex" placeholder="Enter your sex" value={sex} onChange={handlerSexChanged} required/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age:</label>
                    <div className="input-group">
                        <input type="number" className="form-control" id="age" placeholder="Enter your age" value={age} onChange={handlerAgeChanged} required/>
                    </div>
                </div>
                <button type='submit' className='btn btn-primary' style={{margin:'10px'}}>Submit</button>
            </form>
        </div>
    );
}