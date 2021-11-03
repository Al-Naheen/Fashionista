import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    const [mobilenavVisible, setMobilenavVisible] = useState(false)

    return (
        //  {/* Header */}
        <header className="header shop">
            <div className="middle-inner" style={{ padding: '20px 15px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-2 col-12">
                            {/* Logo */}
                            <div className="logo">
                                <Link to="/"><img src="images/logo.png" alt="logo" /></Link>
                            </div>
                            {/*/ End Logo */}
                            {/* Search Form */}
                            <div className="search-top">
                                <div className="top-search"><Link to="/?product="><i className="ti-search" /></Link></div>
                                {/* Search Form */}
                                <div className="search-top">
                                    <form className="search-form">
                                        <input type="text" placeholder="Search here..." name="search" style={{ outline: 'none' }} />
                                        <button value="search" type="submit"><i className="ti-search" /></button>
                                    </form>
                                </div>
                                {/*/ End Search Form */}
                            </div>
                            {/*/ End Search Form */}

                            <div className="">
                                <div className="slicknav_menu ">
                                    <a href="#" aria-haspopup="true" role="button" tabIndex={0} className="slicknav_btn slicknav_open" style={{ outline: 'none' }} onClick={() => setMobilenavVisible(!mobilenavVisible)}>
                                        <span className="slicknav_menutxt" /><span className="slicknav_icon slicknav_no-text">
                                            <span className="slicknav_icon-bar" /><span className="slicknav_icon-bar" /><span className="slicknav_icon-bar" /></span>
                                    </a>
                                    {mobilenavVisible ? (
                                        <ul className="slicknav_nav ease-out" aria-hidden="false" role="menu" style={{}}>
                                            <li className="active">
                                                <Link to="/" role="menuitem" tabIndex={0}>Home</Link>
                                            </li>
                                            <li><Link to="/products" role="menuitem" tabIndex={0}>Products<span className="new">New</span>
                                            </Link>
                                            </li>
                                            <li><Link to="/cart" role="menuitem" tabIndex={0}>Cart</Link>
                                            </li>
                                            <li><Link to="/shipping" role="menuitem" tabIndex={0}>Checkout</Link>
                                            </li>
                                            <li><Link to="/contactus" role="menuitem" tabIndex={0}>Contact Us</Link>
                                            </li>
                                            <li>
                                                <a className="navbar-myaccount" style={{ cursor: 'pointer', color: '#333333' }}>My Account
                                                </a>
                                                <ul>
                                                    <li ><Link className='navbar-profile' to='/profile' style={{ color: '#333333' }}>Profile</Link>
                                                    </li>
                                                    <li><Link className='navbar-logout' to='/' style={{ color: '#333333' }}>Logout</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>

                                    ) : null}
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-8 col-md-7 col-12">
                            <div className="search-bar-top">
                                <div className="search-bar">
                                    <form>
                                        <input name="search" placeholder="Search Products Here....." type="search" />
                                        <button className="btnn"><i className="ti-search" /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-12">
                            <div className="right-bar">
                                {/* Search Form */}
                                <div className="sinlge-bar dropdown">
                                    <a className="single-icon dropdown-toggle" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fa fa-user-circle-o" aria-hidden="true">
                                        </i>
                                        <span style={{ fontSize: '15px', lineHeight: 1.2 }} className="pl-2 navbar-account-name">First Name</span>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <Link className="dropdown-item" to='/profile'>Profile</Link>
                                        <Link className="dropdown-item" to="">Logout</Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header Inner */}
            <div className="header-inner">
                <div className="container">
                    <div className="cat-nav-head">
                        <div className="row">
                            <div className="col-lg-12 col-12">
                                <div className="menu-area">
                                    {/* Main Menu */}
                                    <nav className="navbar navbar-expand-lg">
                                        <div className="navbar-collapse">
                                            <div className="nav-inner">
                                                <ul className="nav main-menu menu navbar-nav">
                                                    <li className="active"><Link to="/">Home</Link></li>
                                                    <li><Link to="/products">Products<span className="new">New</span></Link>
                                                    </li>
                                                    <li><Link to="/cart/:id">Cart</Link></li>
                                                    <li><Link to="/shipping">Checkout</Link></li>
                                                    <li><Link to="/contactus">Contact Us</Link></li>
                                                    <li><a style={{ cursor: 'pointer' }}>My Account<i className="ti-angle-down" /></a>
                                                        <ul className="dropdown">
                                                            <li><Link to='/profile'>Profile</Link></li>
                                                            <li><Link to=''>Logout</Link></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </nav>
                                    {/*/ End Main Menu */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*/ End Header Inner */}
        </header>
        //   {/*/ End Header */}
    )
}

export default Header
