import React, {useState} from "react";
import {Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import { AiOutlineLogout } from "react-icons/ai";


const Header = () => {

    const [click, setclick] = useState(true);
    const handleClick = () => {
        setclick(!click)
    }


    return (
        <>
            <div className="nav">
                <Link className="navlinkT" to="/">
                    <h1>Vocabulary</h1>
                </Link>
                <FaBars className={click ? 'bars' : 'bars-none'} onClick={handleClick}/>
                <AiOutlineLogout className={click ? 'bars-none' : 'bars'} onClick={handleClick}/>
                <div className={click ? 'navmenu clicked' : 'navmenu'}>
                    <Link className="navlink"  to="/signin" onClick={() => setclick(true)}>
                        SignIn
                    </Link>
                    <Link className="navlink"  to="/work" onClick={() => setclick(true)}>
                        Work
                    </Link>
                </div>
                <div className='header-line' />
            </div>
            <div className="main-container" />
        </>
    );
};

export default Header;