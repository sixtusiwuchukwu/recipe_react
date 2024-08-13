import React from "react"; 
import { Nav } from "../nav.style";
import logo from "../../assets/logo.png"

const Navbar = ()=>{
        return(
            <Nav>
                <div style={{marginRight:'auto',display:'flex',alignItems:'center'}}>
                    <img src={logo} alt="recipe-logo" style={{width:50,height:50}}/>
                    <span style={{color:'#F8CC36',fontWeight:"bolder",fontStyle:'italic'}}>Flux-Recipe</span>
                </div>
               <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Explore</li>
                <li>Create-Recipe</li>
               </ul>
            </Nav>
               
        )
}

export default Navbar