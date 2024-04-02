import "./Header.scss";
import logo from "../../assets/logo/ikOankaar.jpeg";
import loginButton from "../../assets/icons/login.png"
import about from "../../assets/icons/about.png"
import { NavLink, useLocation } from "react-router-dom";


function Header() {

    // const isActive = (path) => location.pathname === path;

    return (
        <header className="header">
            <div className="header__content">
                <div className="header__spacer mobile">

                </div>
                <div className="header__logo-container">
                    <NavLink className="header__logo-link" to={"/"}>
                        <img className="header__logo" src={logo} alt="ik Oankaar logo"></img>
                    </NavLink>
                </div>
                <div className="header__links">
                    <NavLink className="header__link">
                        <p className="header__icon">About</p>
                    </NavLink>
                    <NavLink className="header__link">
                        <p className="header__icon">Login</p>
                    </NavLink>
                </div>
            </div>
        </header>
    )
}

export default Header;

{/* <img className="header__login-icon" src={loginButton}/> */ }