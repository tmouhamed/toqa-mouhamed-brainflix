import React from 'react';
import './Upload.scss';
import Header from '../Header/Header';
import Image from '../../assets/Images/Upload-video-preview.jpg'
import Axios from 'axios';

class Upload extends React.Component {
    url = 'http://localhost:8080';
    state = {
        title: '',
        channel: 'Video Uploader',
        description: '',
        image: '',
        views: 0,
        likes: 0,
        duration: '',
        timestamp: this.videoTime,
        video: '',
        comments: [{
            name: "Micheal Lyons",
            comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
            id: "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
            likes: 0,
            timestamp: 1545162149000
        },
        {
            name: "Gary Wong",
            comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
            id: "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
            likes: 0,
            timestamp: 1544595784046
        },
        {
            name: "Theodore Duncan",
            comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
            id: "993f950f-df99-48e7-bd1e-d95003cc98f1",
            likes: 0,
            timestamp: 1542262984046
        }]

    }

    postVideo = (id) => {
        Axios.post(`${this.url}/videos/${id}/comments`)
            .then(response => {
                console.log(response)
            })
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.postVideo();
    } 

    updateTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    updateDescription = (event) => {
        this.setState({
            description: event.target.value
        })
    }

    componentDidMount() {
        this.postVideo(this.props.match.params.id);
    }

    render() {
        console.log(this.state)
        return (
            <>
                <Header />
                <main className="main__content upload__page">
                    <section className="main__info">
                        <h1 className="main__info-title">Upload Video</h1>
                    </section>
                    <form className="main__form" onSubmit={this.submitHandler}>
                        <div className="main__form-content">
                            <div className="main__form-video">
                                <h5 className="main__form-video__subtitle">Video Thumbnail</h5>
                                <img className="main__form-video__image" src={Image} alt="uploaded" />
                            </div>
                            <div className="main__form-div">
                                <label className="main__form-div__label">Title Your Video</label>
                                <input className="main__form-div__input" type='text' name="title" placeholder="Add a title to your video" value={this.state.title} onChange={this.updateTitle}></input>
                                <label className="main__form-div__label">Add a video description</label>
                                <textarea className="main__form-div__textArea" cols="55" id="comment" name="comment" type="text" placeholder="Add a description of your video" vlaue={this.state.description} onChange={this.updateDescription}></textarea>
                            </div>
                        </div>
                        <div className="main__form-div__buttons">
                            <button className="main__form-div__button" type="submit">Puplish</button>
                            <button className="main__form-div__cancelButton"> Cancel</button>
                        </div>
                    </form>
                </main>
            </>
        );
    }
}
export default Upload;