import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function handleSubmit(event){
    event.preventDefault();
    axios.post('http://localhost:5000/login', {email, password})
    .then(res => console.log(res))
    .catch(err => console.log(err));}

    return(
        <div className="d-flex vh-100 justify-content-center align-items-center bg-primary">
            <div className="p-3 bg-white w-25">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter Email" 
                        className="from-control" onChange={e => setEmail(e.target.value)}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter Password" 
                        className="from-control" onChange={e => setPassword(e.target.value)}></input>
                    </div>
                    <button className="btn btn-success">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;