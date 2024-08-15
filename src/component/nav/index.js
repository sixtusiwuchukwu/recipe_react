import React, { useEffect, useState } from "react"; 
import { Nav } from "../nav.style";
import logo from "../../assets/logo.png"
import { NavLink } from "react-router-dom";


const Navbar = ()=>{

    const [show,setShow] = useState(false)
        return(
            <Nav>
                <NavLink to={'/'} style={{marginRight:'auto',display:'flex',alignItems:'center'}}>
                    <img src={logo} alt="recipe-logo" style={{width:50,height:50}}/>
                    <span style={{color:'#F8CC36',fontWeight:"bolder",fontStyle:'italic'}}>Flux-Recipe</span>
                </NavLink>
                <p className='mobile-screen_' style={{fontSize:'20px'}} onClick={()=>setShow(!show)}>{show ? "X" : '|||'}</p>
               <ul className="large-screen">
                <li>Home</li>
                <li>About us</li>
                <li>Explore</li>
                <li>Create-Recipe</li>
               </ul> 
               {show && <ul className="mobile-screen">
                <li onClick={()=>setShow(false)}>Home</li>
                <li onClick={()=>setShow(false)}>About us</li>
                <li onClick={()=>setShow(false)}>Explore</li>
                <li onClick={()=>setShow(false)}>Create-Recipe</li>
               </ul>}
            </Nav>
               
        )
}

export default Navbar