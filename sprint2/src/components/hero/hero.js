import React from 'react';
import './hero.scss';
import PlayIcon from '../../assets/Icons/SVG/Icon-play.svg';
import VolumeIcon from '../../assets/Icons/SVG/Icon-volume.svg';
import FullScreen from '../../assets/Icons/SVG/Icon-fullscreen.svg';

class Hero extends React.Component {
    render() {
        return (
            <section className="main__hero">
                <video className="main__hero-video" poster={this.props.mainVideo.image}>
                    <source src={this.props.mainVideo.video} type="video/mp4"></source>
                </video>
                <img className="main__hero-icons main__hero-icons__left" src={PlayIcon} alt="play icon"></img>
                <div className="main__hero-icons main__hero-icons__center"> <p ></p><span className="main__hero-icons__center-text">0:00 / 0:42</span></div>
                <div className="main__hero-icons main__hero-icons__right">
                    <img className="main__hero-icons__right-image" src={FullScreen} alt="full screen icon"></img>
                    <img src={VolumeIcon} alt="volume icon"></img>
                </div>
            </section>
        );
    }
}
export default Hero;