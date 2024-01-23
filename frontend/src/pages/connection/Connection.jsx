import { getInfos } from '../../services/connection'
import React, { useState } from 'react';
import axios from 'axios';

function Connection() {
    document.title = "Argent Bank - Home Page";
    const Connect = () => {
        // let password = document.forms["connectionForm"]["password"].value;
        // let username = document.forms["connectionForm"]["username"].value;
        // alert(getInfos(username, password))
        // document.getElementById("response").innerText = getInfos(username, password)
    }
    // Connect();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            //signin
            // const response1 = await axios.post('http://localhost:3001/api/v1/user/signup', {
            //     email: "test@mail.com",
            //     password: "1234",
            //     firstName: "john",
            //     lastName: "doe"
            // });

            //login
            const response2 = await axios.post('http://localhost:3001/api/v1/user/login', {
                email: "steve@rogers.com",
                password: "password456"
                // email: email,
                // password: password
            });
            console.log("token", response2.data.body.token);
            // console.log(response2.data.body.token);

            //profile
            const token = response2.data.body.token;

            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };

            const response = await axios.post('http://localhost:3001/api/v1/user/profile', {}, config);

            // const response = await axios.post('http://localhost:3001/api/v1/user/profile', {
            //     Authorization: response2.data.body.token
            // });

            // console.log(response.data);

            // updating
            const response3 = await axios.put('http://localhost:3001/api/v1/user/profile', {
                firstName: "steve",
                lastName: "Rogers"
            }, config);
            // console.log(response3.statusText);
            // console.log(response3.data.body.id);

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                {/* <form name="connectionForm">
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label
                        ><input type="text" id="username" name="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label
                        ><input type="password" id="password" name="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <a href="./user.html" class="sign-in-button">Sign In</a>
                    <button className="sign-in-button" onClick={Connect()}>Sign In</button>
                </form> */}


                <form onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>

            </section>
            <div id="response">response</div>
        </main>
    )
}

export default Connection