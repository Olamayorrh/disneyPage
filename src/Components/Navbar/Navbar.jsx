import { Link } from "react-router-dom";
import "./Navbar.css"
const Navbar = ()=>{
    return(
        <div>

            <nav>
                <Link to="/"><img src="./images/disneyLogo.png" id="navimg"></img></Link>
                <div id="list">
                    <Link to='/disney'>DISNEY+</Link>
                    <Link to='/shop'>SHOP</Link>
                    <Link to='/movies'>MOVIES</Link>
                    <Link to='/shows'>SHOWS</Link>
                    <Link to='/park'>PARKS</Link>
                    
                </div>
                
            </nav>
        </div>
    )
}

export default Navbar;