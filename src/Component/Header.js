import React from "react";
import logo from '../Image/Logo.png'
import './Header.css';

const Header = () => {

    return (
        <div className="shopify-header">
            <div className="header">
                <p className="mesasge-bar">welcome to my print clothe</p>
            </div>
            <div className='shopify-section-heder'>
                <div className="logo">
                    <img src={logo} alt="logo"  style={{height:'60px'}}/>
                </div>
                <div className="addtoCart">
                    <a class="btn text-white"role="button">
                        <i class="fas fa-shopping-cart"></i>
                    </a>
                </div>
                <div className="menu-item">
                    <ul className="list-menu">
                        <li className="header-menu-item">
                            <a href="https://myprintclothe.com/" className="item-link"></a>
                            <span>Home</span>
                        </li>
                        <li className="header-menu-item">
                            <a href="https://myprintclothe.com/collections/all" className="item-link"></a>
                            <span>Catalog</span>
                        </li>
                        <li className="header-menu-item">
                            <a href="https://myprintclothe.com/pages/contact" className="item-link"></a>
                            <span>Contact</span>
                        </li>
                        <li className="header-menu-item">
                            <a href="https://mypritnclothe.shiprocket.co/" className="item-link"></a>
                            <span>Track Order</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;