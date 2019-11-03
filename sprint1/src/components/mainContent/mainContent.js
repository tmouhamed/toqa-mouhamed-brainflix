import React from 'react';
import './mainContent.scss';
import Hero from '../hero/hero.js';
import MainVideo from '../mainVideo/mainVideo.js';
import Comment from '../comments/comment.js';
import SideVideo from '../sideVideo/sideVideo.js';

class MainContent extends React.Component {
    render() {
        console.log(this.props);
        return (
            <main className="main">
                <Hero mainVideo={this.props.mainVideo}/>
                <section className="main__content">
                    <article className="main__content-article">
                        <MainVideo  mainVideo={this.props.mainVideo}/>
                        <Comment mainVideo={this.props.mainVideo}/>   
                    </article>
                    <SideVideo sideVideo={this.props.sideVideo}/>
                </section>
            </main>
        );
        
    }
}
export default MainContent;