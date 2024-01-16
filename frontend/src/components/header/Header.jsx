import logo from '../../assets/images/argentBankLogo.png'
import { Link } from 'react-router-dom'

function Header() {
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
            <div>
                <Link className="main-nav-item" to="/connection">
                    <i className="fa fa-user-circle"></i>
                    Sign In</Link>
            </div>
        </nav>
    )
}

export default Header