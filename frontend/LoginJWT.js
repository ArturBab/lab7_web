import React, {SyntheticEvent, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginJWT.css';
import {Navigate} from "react-router-dom";

const LoginJWT = () => {

    const [email, setEmail] = useState(``);
    const [password, setPassword] = useState(``);
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await fetch('http://127.0.0.1:8000/api/login/', {
            method: 'POST',
            headers:
                {
                    'Content-Type': 'application/json'
                },
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });
        setRedirect(true);
    }

    if(redirect){
        return <Navigate to="/home" />;
    }

    return(
        <div>
            <main className="form-signin">
                <form onSubmit={submit}>
                    <h1 className="h3 mb-3 fw-normal">Пожалуйста, войдите в систему</h1>

                    <div className="form-floating">
                        <input type="email" className="form-control" placeholder="name@example.com" required
                               onChange={e => setEmail(e.target.value)}
                        />
                        <label htmlFor="floatingInput">Адрес эл. почты</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" placeholder="Password" required
                               onChange={e => setPassword(e.target.value)}
                        />
                        <label htmlFor="floatingPassword">Пароль</label>
                    </div>

                    <button className="w-100 btn btn-lg btn-primary" type="submit">Войти</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2023</p>
                </form>
            </main>
        </div>
    )
}

export default LoginJWT;