import React from 'react';
import './hero.scss';

class Hero extends React.Component {
    render() {
        console.log(this.props);
        return (
            <section className="main__hero">
                <video className="main__hero-controls" poster={this.props.mainVideo.image} controls></video>
            </section>
        );
    }
}
export default Hero;