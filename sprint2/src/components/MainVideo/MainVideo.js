import React from 'react';
import './MainVideo.scss';
import Views from '../../assets/Icons/SVG/Icon-views.svg';
import Likes from '../../assets/Icons/SVG/Icon-likes.svg';

class MainVideo extends React.Component {
    render() {
        return (
            <article className="main__content-info">
                <h1 className="main__content-info__title">{this.props.mainVideo.title}</h1>
                <div className="main__content-info-inLine">
                    <div className="main__content-info-subtitle">
                        <h4 className="main__content-info-subtitle__name">By {this.props.mainVideo.channel}</h4>
                        <span className="main__content-info-subtitle__date">{this.props.mainVideo.timestamp}</span>
                    </div>
                    <div className="main__content-info-icon">
                        <div className="main__content-info-icon__viewsLikes">
                            <img className="main__content-info-icon__viewsLikes-img" src={Views} alt="video views"></img>
                            <span className="main__content-info-icon__viewsLikes-number">{this.props.mainVideo.views}</span>
                        </div>
                        <div className="main__content-info-icon__viewsLikes">
                            <img className="main__content-info-icon__viewsLikes-img" src={Likes} alt="video likes"></img>
                            <span className="main__content-info-icon__viewsLikes-number">{this.props.mainVideo.likes}</span>
                        </div>
                    </div>
                </div>
                <p className="main__content-info-description">{this.props.mainVideo.description}</p>
            </article>
        );
    }

}

export default MainVideo;