import { Link } from "react-router-dom"
import NaviLogo from "../assets/Logo_Navi.svg"


function NaviComponent() {
  return (
    <nav>
      <Link to="/">
      <img src={NaviLogo} alt="Beer Logo" />
      </Link>
    </nav>
  )
}

export default NaviComponent
