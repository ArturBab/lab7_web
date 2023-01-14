import React, {useState, SyntheticEvent} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginJWT.css';
import {Navigate} from "react-router-dom";

const RegisterJWT = () => {

    const [name, setName] = useState(``);
    const [email, setEmail] = useState(``);
    const [password, setPassword] = useState(``);
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await fetch('http://127.0.0.1:8000/api/register/', {
            method: 'POST',
            headers:
                {
                    'Content-Type': 'application/json'
                },
            body: JSON.stringify({
                name,
                email,
                password
            })
        });

        setRedirect(true);
    }

    if(redirect){
    return <Navigate to="/loginJWT" />;
    }

    return(
        <div>
            <main className="form-signin">
                <form onSubmit={submit}>
                    <h1 className="h3 mb-3 fw-normal">Пожалуйста, зарегистрируйтесь</h1>

                    <div className="form-floating">
                        <input className="form-control" placeholder="Ваше имя" required
                            onChange={e => setName(e.target.value)}
                        />
                        <label htmlFor="floatingInput">Ваше имя</label>
                    </div>
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

                    <button className="w-100 btn btn-lg btn-primary" type="submit">Зарегистрироваться</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2023</p>
                </form>
            </main>
        </div>
    )
}

export default RegisterJWT;