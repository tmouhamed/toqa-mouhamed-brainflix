import React from 'react';
import './SideVideo.scss';
import {Link} from 'react-router-dom';
class SideVideo extends React.Component {
    render() {
        return (
            <article className="main__content-sideVideo">
                <h4 className="main__content-sideVideo-title">Next Video</h4>
                {this.props.sideVideo.filter(item => item.id !== this.props.mainVideo.id).map((item) => {
                    return (
                        <Link className="main__content-sideVideo-item" to={`/videos/${item.id}`} key={item.id}>
                                <img className="main__content-sideVideo-item__video" src={item.image} alt="side video"></img>
                                <div className="main__content-sideVideo-item__heading">
                                    <h4 className="main__content-sideVideo-item__heading-title">{item.title}</h4>
                                    <span className="main__content-sideVideo-item__heading-subtitle">{item.channel}</span>
                                </div>
                        </Link>
                    );
                })
                }
            </article>
        );
    }

}

export default SideVideo;