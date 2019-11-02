import React from 'react';
import Logo from '../../assets/Logo/Logo-brainflix.svg';
import Avatar from '../../assets/Images/Mohan-muruge.jpg';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <img className="header__logo" src={Logo} alt="Header Logo"></img>
                <form className="header__form">
                    <input className="header__form-input" type="text" name="search" placeholder="Search"></input>
                    <div className="header__form-div">
                        <button className="header__form-button" type="click">Upload</button>
                        <img className="header__form-picture" src={Avatar} alt="ProfilePicture"></img>
                    </div>
                </form>
            </header>
        );
    }
}
export default Header;