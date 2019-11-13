import React from 'react';
import './Upload.scss';
import Header from '../Header/Header';
import Image from '../../assets/Images/Upload-video-preview.jpg'

class Upload extends React.Component {
    render() {
        return (
            <>
                <Header />

                <main className="main__content upload__page">
                    <section className="main__info">
                        <h1 className="main__info-title">Upload Video</h1>
                    </section>
                    <form className="main__form">
                        <div className="main__form-content">
                            <div className="main__form-video">
                                <h5 className="main__form-video__subtitle">Video Thumbnail</h5>
                                <img className="main__form-video__image" src={Image} alt="uploaded" />
                            </div>
                            <div className="main__form-div">
                                <label className="main__form-div__label">Title Your Video</label>
                                <input className="main__form-div__input" type='text' name="title" placeholder="Add a title to your video" ></input>
                                <label className="main__form-div__label">Add a video description</label>
                                <textarea className="main__form-div__textArea" cols="55" id="comment" name="comment" type="text" placeholder="Add a description of your video"></textarea>
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