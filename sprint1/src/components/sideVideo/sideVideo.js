import React from 'react';
import './sideVideo.scss';
class SideVideo extends React.Component {
    render() {
        return (
            <article className="main__content-sideVideo">
                <h4 className="main__content-sideVideo-title">Next Video</h4>
                {this.props.sideVideo.filter(item => item.id !== 0).map((item) => {
                    return (
                        <div className="main__content-sideVideo-item" key={item.id}>
                            <img className="main__content-sideVideo-item__video" src={item.image} alt="side video"></img>
                            <div className="main__content-sideVideo-item__heading">
                                <h4 className="main__content-sideVideo-item__heading-title">{item.title}</h4>
                                <span className="main__content-sideVideo-item__heading-subtitle">{item.channel}</span>
                            </div>
                        </div>
                    );
                })
                }
            </article>
        );
    }

}

export default SideVideo;