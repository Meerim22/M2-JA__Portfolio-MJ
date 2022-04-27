import { NavLink } from "react-router-dom";
import "./header.scss";

const activeLink = ({ isActive }) =>
    isActive ? "navlink active-link" : "navlink";

function Header() {
    // const menuToggler = document.querySelector(".nav__logo-btn");
    // const nav = document.querySelector(".nav");
    // const menu = document.querySelector(".nav__menu-ul");
    // const menuItem = document.querySelectorAll(".nav__menu-item");

    // menuToggler.addEventListener("click", function () {
    //     nav.classList.toggle("nav__nav-px");
    //     menu.classList.toggle("have");
    //     menuToggler.classList.add("hide");
    // });

    // menuItem[0].addEventListener("click", function () {
    //     menuToggler.classList.remove("hide");
    //     menu.classList.remove("have");
    //     nav.classList.remove("nav__nav-px");
    // });

    return (
        <header className="header">
            <nav className="nav">
                <a className="nav__logo" href="/#"><span class="nav__logo-icon">MJ</span> <span class="nav__logo-h">Mika J</span></a>
                <div className="nav__menu">
                    <button class="nav__logo-btn">FrontEnd <span class="nav__logo-h">разработчик</span></button>
                    <ul className="nav__menu-ul">  {/* {(isActive) => isActive ? "nav__menu-ul" : "nav__menu-ul--show"} */}
                        <li className="nav__menu-item active" type="button">
                            <NavLink to="/" className={activeLink}>Home</NavLink>
                        </li>
                        <li className="nav__menu-item" type="button">
                            <NavLink to="/about" className={(isActive) => isActive ? "nav-link active-link" : "nav-link"} >About</NavLink>
                        </li>
                        <li className="nav__menu-item" type="button">
                            <NavLink to="/contacts" className={(isActive) => isActive ? "nav-link active-link" : "nav-link"} >Contacts</NavLink>
                        </li>
                        <li className="nav__menu-item" type="button">
                            <NavLink to="/blog" className={(isActive) => isActive ? "nav-link active-link" : "nav-link"} >Posts</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
