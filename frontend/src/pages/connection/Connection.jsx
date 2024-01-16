import { getInfos } from '../../services/connection'

function Connection() {
    document.title = "Argent Bank - Home Page";
    const Connect = () => {
        let password = document.forms["connectionForm"]["password"].value;
        let username = document.forms["connectionForm"]["username"].value;
        // alert(getInfos(username, password))
        document.getElementById("response").innerText = getInfos(username, password)
    }
    // Connect();

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form name="connectionForm">
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
                    {/* <a href="./user.html" class="sign-in-button">Sign In</a> */}
                    <button className="sign-in-button" onClick={Connect()}>Sign In</button>
                </form>
            </section>
            <div id="response">response</div>
        </main>
    )
}

export default Connection