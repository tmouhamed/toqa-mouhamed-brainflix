import React from 'react';
import './Header.scss';
import Logo from '../../assets/Logo/Logo-brainflix.svg';
import Avatar from '../../assets/Images/Mohan-muruge.jpg';
import { Link } from 'react-router-dom';
// import UpdatePage from '../updatePage/updatePage';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <Link className="header__link"to ='/'><img className="header__link-logo" src={Logo} alt="Header Logo"></img></Link>
                <form className="header__form">
                    <input className="header__form-input" type="text" name="search" placeholder="Search"></input>
                    <div className="header__form-div">
                        <Link className="header__form-linkButton" to="/upload"><button className="header__form-linkButton__button" type="click">Upload</button></Link>
                        <img className="header__form-picture" src={Avatar} alt="ProfilePicture"></img>
                    </div>
                </form>
            </header>
        );
    }
}
export default Header;