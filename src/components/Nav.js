import React from 'react'
import {Link} from 'react-router-dom';
const Nav = () => {

    const navStyle = {
        color: 'white',
        textTransform: 'uppercase'
    };

    return (
        <div>
            <nav>
                <Link style= {navStyle} to = '/'>
                <h3>Logo</h3>
                </Link>
                
                <ul className='nav-link'>
                   <Link style= {navStyle} to = '/about'>
                   <li>About</li>
                   </Link> 
                    <Link style= {navStyle} to = '/shop'>
                    <li>Shop</li>
                    </Link>
                    
                </ul>
            </nav>
        </div>
    )
}

export default Nav
