import React from 'react';
import Axios from 'axios';

import './MainContent.scss';
import Hero from '../Hero/Hero.js';
import MainVideo from '../MainVideo/MainVideo.js';
import Comment from '../Comments/Comment.js';
import SideVideo from '../SideVideo/SideVideo.js';
import Header from '../Header/Header';

class MainContent extends React.Component {
    url = 'https://project-2-api.herokuapp.com';
    apiKey = '?api_key=66fa89b3-0fa2-46c4-ae2a-ae3ed0c1eda7';

    state = {
        mainVideos: { comments: [] },
        sideVideos: [],
    }

    getVideoList = () => {
        Axios.get(`${this.url}/videos/${this.apiKey}`)
            .then(response => {
                console.log(response.data);
                this.setState({
                    sideVideos: response.data,
                    id: response.data[0].id
                })
            })
    }

    getMainVideo = (id) => {
        if (id) {
            Axios.get(`${this.url}/videos/${id}/${this.apiKey}`)
                .then(response => {
                    if (this.state.mainVideos.id !== response.data.id)
                        this.setState({
                            mainVideos: response.data
                        })
                })

        }
    }

    componentDidMount() {
        this.getMainVideo('1af0jruup5gu');
        this.getVideoList();
    }

    componentDidUpdate(prevProps) {
        //to make the homepage only for the first video 
        if (!this.props.match.params.id){
            this.getMainVideo('1af0jruup5gu');
        }
        else if (this.props.match.params.id !== prevProps.match.params.id) {
            this.getMainVideo(this.props.match.params.id);
        }
    }

    render() {
        console.log(this.state);
        return (
            <>
                <Header />
                <main className="main">
                    <Hero mainVideo={this.state.mainVideos} />
                    <section className="main__content">
                        <article className="main__content-article">
                            <MainVideo mainVideo={this.state.mainVideos} />
                            <Comment mainVideo={this.state.mainVideos} />
                        </article>
                        <SideVideo sideVideo={this.state.sideVideos} mainVideo={this.state.mainVideos} />
                    </section>
                </main>
            </>
        );

    }
}
export default MainContent;