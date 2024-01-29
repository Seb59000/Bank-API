import React, { useState } from 'react';
import { LoginApi, GetProfile } from '../../services/BDDManager';
import { useStore } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const store = useStore();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = await LoginApi(email, password);
        if (token === 'error') {
            const error = document.getElementById("errorMessage")
            error.innerText = "Identifiants non valides";
        } else {
            ///je modifie state pour le token
            store.dispatch({ type: 'MODIFIER_TOKEN', payload: token });
            const profile = await GetProfile(store.getState().token);

            ///je modifie state pour firstName et lastName
            store.dispatch({ type: 'MODIFIER_PRENOM', payload: profile.firstName });
            store.dispatch({ type: 'MODIFIER_NOM', payload: profile.lastName });

            navigate('/profil');
        }
    };

    return (
        <main className="main bg-dark padding-main">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form name="connectionForm" onSubmit={handleSubmit}>
                    <p id="errorMessage"></p>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    )
}

export default Login