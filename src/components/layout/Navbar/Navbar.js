import React from 'react'
import illustrate from '../../Assets/logo1.svg'
import './Navbar.css'
import LogoutIcon from '@mui/icons-material/Logout';
import {useNavigate} from 'react-router-dom';
const Navbar = () => {
    let navigate = useNavigate();
    return (
        <div className='Navbar'>
            <div className='logo' onClick={()=>navigate("/")}>
                <div className='logo-image'>
                    <img className="image" src={illustrate} alt="logo"/>
                </div>
                <div className='logo-head'>
                    <p>Qwait?</p>
                </div>

            </div>
            <div className='Nav-menu'>
                {/* <i class="fa fa-sign-out" aria-hidden="true" style={{ color: "white", fontSize: "2.2em" }}></i> */}
                <LogoutIcon style={{color:"white"}} fontSize="large"/>
            </div>
        </div>
    )
}

export default Navbar