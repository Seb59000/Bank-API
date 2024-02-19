import logo from '../../assets/images/argentBankLogo.png'
import { Link } from 'react-router-dom'
import { useStore } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

function Header() {
    const store = useStore();
    const navigate = useNavigate();
    const [firstName, SetFirstName] = useState(store.getState().firstName);

    useEffect(() => {
        store.subscribe(() => SetFirstName(store.getState().firstName));
    })

    const SignOut = () => {
        store.dispatch({ type: 'MODIFIER_TOKEN', payload: '' });
        store.dispatch({ type: 'MODIFIER_PRENOM', payload: '' });
        store.dispatch({ type: 'MODIFIER_NOM', payload: '' });
        navigate('/');
    }

    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            {store.getState().token === '' ?
                <div>
                    <Link className="main-nav-item" to="/login">
                        <i className="fa fa-user-circle"></i>
                        Sign In</Link>
                </div>
                :
                <div>
                    <Link className="main-nav-item" to="/profil">
                        <i className="fa fa-user-circle"></i>
                        {firstName}</Link>
                    <span className="main-nav-item" onClick={SignOut}>
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </span>
                </div>
            }
        </nav>
    )
}

export default Header