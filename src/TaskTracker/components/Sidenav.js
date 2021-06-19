import React from 'react'
import  './sidenav.css'
import {Link} from 'react-router-dom';

function Sidenav() {
    return (
        <div>
            <ul className="sidenavUl">
            <Link to='/products'>
                <li><i className="fa fa-server"></i>All Products</li>
            </Link>
            <Link to='/products/category/electronics'>
                <li><i className="fa fa-laptop" aria-hidden="true"></i>Electronics</li>
            </Link>
            <Link to='/products/category/jewelery'>
                <li><i className="fas fa-gem"></i>Jewelery</li>
            </Link>
            <Link to='/products/category/mens'>
                <li><i className="fas fa-tshirt"></i>Men's clothing</li>
            </Link>
            <Link to='/products/category/womens'>
                <li><i className="fas fa-female"></i>Women's clothing</li>
            </Link>
            </ul>
        </div>
    )
}

export default Sidenav
