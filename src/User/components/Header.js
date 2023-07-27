import React from 'react';
import { Link } from 'react-router-dom';
import { Links } from './UI/Link/Link.style';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));



function Header(props) {
    let login = localStorage.getItem("login");

    let cartData = useSelector((state) => state.cart);
    let cartCounter = 0;
    if (cartData) {
        cartCounter = cartData.item.reduce((acc, v, i) => acc + v.qty, 0);
    }

    const handleRemove = () => {
        localStorage.removeItem('login');
    }
    return (
        <div className="main-header">
            <div id="topbar" className="d-flex align-items-center fixed-top">
                <div className="container d-flex justify-content-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope" /> <Links href="mailto:contact@example.com">cityhospital@example.com</Links>
                        <i className="bi bi-phone" /> +91 9988776655
                    </div>
                    <div className="d-none d-lg-flex social-links align-items-center">
                        <Link to="cart">
                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={cartCounter} color="secondary">
                                    <ShoppingCartIcon />
                                </StyledBadge>
                            </IconButton>
                        </Link>
                        <Links href="#" className="twitter"><i className="bi bi-twitter" /></Links>
                        <Links href="#" className="facebook"><i className="bi bi-facebook" /></Links>
                        <Links href="#" className="instagram"><i className="bi bi-instagram" /></Links>
                        <Links href="#" className="linkedin"><i className="bi bi-linkedin" /></Links>
                    </div>
                </div>
            </div>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                    <div className="logo">
                        <Link to="/">
                            <h1 className="logo me-auto">City</h1><br />
                            <h2 className="logo-tiny-text me-auto">Multispeciality Hospital</h2>
                        </Link>
                    </div>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><Link class="nav-link scrollto active" to="/">Home</Link></li>
                            <li><Link class="nav-link scrollto" to="/medicine">Medicine</Link></li>
                            <li><Link class="nav-link scrollto" to="/department">Departments</Link></li>
                            <li><Link class="nav-link scrollto" to="/doctors">Doctors</Link></li>
                            <li><Link class="nav-link scrollto " to="/about">About</Link></li>
                            <li><Link class="nav-link scrollto" to="/contact">Contact</Link></li>
                            <li><Link class="nav-link scrollto" to="/counter">Counter</Link></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>
                    <Link to="/appointment" className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span>
                        Appointment</Link>
                    {
                        login ? <Link to="/auth" className="appointment-btn scrollto" onClick={handleRemove}>
                            <span className="d-none d-md-inline">Logout</span>
                        </Link> :
                            <Link to="/auth" className="appointment-btn scrollto">
                                <span className="d-none d-md-inline">Login/ Signup</span>
                            </Link>
                    }
                </div>
            </header>
        </div>

    );
}

export default Header;