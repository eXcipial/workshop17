import logotipas from "../images/logo.svg"
import './Styles/header.css'
function Header() {
    return (
        <>
<div className="headerContainer">
<div className="headerLogo">
    <img src={logotipas} alt="" />
</div>

<div className="headerListContainer">
<nav>
    <ul>
        <li>Home</li>
        <li>Find a doctor</li>
        <li>Apps</li>
        <li>Testimonials</li>
        <li>About us</li>
    </ul>
</nav>

</div>

</div>
        </>
    )
}

export default Header