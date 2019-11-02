import React from 'react';
import Poster from '../../assets/Images/video-list-0.jpg'

class Hero extends React.Component {
    render() {
        return (
            <section className="main__hero">
                <video className="main__hero-controls" poster={Poster} controls></video>
            </section>
        );
    }
}
export default Hero;