import React, {  useState } from "react"; 
import { Nav } from "../nav.style";
import logo from "../../assets/logo.png"
import { NavLink } from "react-router-dom";


const Navbar = ()=>{

    const [show,setShow] = useState(false)
        return(
            <Nav>
                <NavLink className="logo" to={'/'} style={{ marginRight:'auto',display:'flex',alignItems:'center'}}>
                    <img src={logo} alt="recipe-logo" style={{width:50,height:50}}/>
                    <span style={{color:'#F8CC36',fontWeight:"bolder",fontStyle:'italic'}}>Flux-Recipe</span>
                </NavLink>
                <p className='mobile-screen_' style={{fontSize:'20px'}} onClick={()=>setShow(!show)}>{show ? "X" : '|||'}</p>
               <ul className="large-screen">
                <NavLink className="link" to={'/'} style={{color:'black'}}>Home</NavLink>
                <NavLink className="link" style={{color:'black'}}to={'/about'}>About us</NavLink>
                <NavLink className="link" style={{color:'black'}} to={'/#explore'}>Explore</NavLink>
                <NavLink className="link" to={'/recipe/create'} style={{color:'black'}}>Create-Recipe</NavLink>
               </ul> 
               {show && <ul className="mobile-screen">
                <NavLink className="link" style={{color:'black'}} onClick={()=>setShow(false)}>Home</NavLink>
                <li onClick={()=>setShow(false)}>About us</li>
                <li onClick={()=>setShow(false)}>Explore</li>
                <NavLink className="link" to={'/recipe/create'} style={{color:'black'}} onClick={()=>setShow(false)}>Create-Recipe</NavLink>
               </ul>}
            </Nav>
               
        )
}

export default Navbar