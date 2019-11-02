import React from 'react';
import Views from '../../assets/Icons/SVG/Icon-views.svg';
import Likes from '../../assets/Icons/SVG/Icon-likes.svg';
import Avatar from '../../assets/Images/Mohan-muruge.jpg';
import Video1 from '../../assets/Images/video-list-1.jpg';

class MainContent extends React.Component {
    render() {
        return (
            <section className="main__content">
                <article className="main__content-article">
                    {/* MAIN VIDEO INFORMATION  */}
                    <article className="main__content-info">
                        <h1 className="main__content-info__title">BMX Rampage: 2018 Highlights</h1>
                        <div className="main__content-info-inLine">
                            <div className="main__content-info-subtitle">
                                <h4 className="main__content-info-subtitle__name">By Red Cow</h4>
                                <span className="main__content-info-subtitle__date">12/18/2018</span>
                            </div>
                            <div className="main__content-info-icon">
                                <div className="main__content-info-icon__viewsLikes">
                                    <img className="main__content-info-icon__viewsLikes-img" src={Views} alt="video views"></img>
                                    <span className="main__content-info-icon__viewsLikes-number">1,001,023</span>
                                </div>
                                <div className="main__content-info-icon__viewsLikes">
                                    <img className="main__content-info-icon__viewsLikes-img" src={Likes} alt="video views"></img>
                                    <span className="main__content-info-icon__viewsLikes-number">110,985</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="main__content-info-description">On a gusty day in Southern Utah, a group of 25
                                daring mountain bikers blew the doors off what is
                                possible on two wheels, unleashing some of the
                                biggest moments the sport has ever seen. While
                                mother nature only allowed for one full run before
                                the conditions made it impossible to ride, that was
                                all that was needed for event veteran Kyle Strait,
                                who won the event for the second time -- eight years
                                after his first Red Cow Rampage title
                        </p>
                        </div>
                    </article>

                    {/* COMMENT SECTION */}
                    <article className="main__content-comments">
                        <h4 className="main__content-comments-title">3 Comments</h4>

                        {/* COMMENT SECTION FORM  */}
                        <section className="main__content-comments-container1">
                            <img className="main__content-comments-picture" src={Avatar} alt="Avatar"></img>
                            <form className="main__content-comments-form">
                                <label className="main__content-comments-form__label">Join The Conversation</label>
                                <div className="main__content-comments-form__div">
                                    <textarea cols="55" id="comment" className="main__content-comments-form_textArea" name="comment" type="comment" placeholder="That was easily the most spectacular BMX moment ever."></textarea>
                                    <button className="main__content-comments-form__button" type="submit">Comment</button>
                                </div>

                            </form>
                        </section>

                        {/* COMMENT SECTION LIST  */}
                        <ul className="main__content-comments-container2">
                            <li className="main__content-comments-card" id="comment1">
                                <img className="main__content-comments-card__picture" alt="" src=""></img>
                                <div className="main__content-comments-card__section">
                                    <div className="main__content-comments-card__heading">
                                        <h4 className="main__content-comments-card__heading-h4">Micheal Lyons</h4>
                                        <span className="main__content-comments-card__heading-date">12/18/2018</span>
                                    </div>
                                    <p className="main__content-comments-card__message">They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.</p>
                                </div>
                            </li>
                            <li className="main__content-comments-card" id="comment2">
                                <img className="main__content-comments-card__picture" alt="" src=""></img>
                                <div className="main__content-comments-card__section">
                                    <div className="main__content-comments-card__heading">
                                        <h4 className="main__content-comments-card__heading-h4">Gary Wong</h4>
                                        <span className="main__content-comments-card__heading-date">12/18/2019</span>
                                    </div>
                                    <p className="main__content-comments-card__message">Every time I see him shred I feel so motivated to get off my couch and hop on my board.He’s so talented! I wish I can ride like him one day so I can really enjoy myself!</p>
                                </div>
                            </li>
                            <li className="main__content-comments-card" id="comment3">
                                <img className="main__content-comments-card__picture" alt="" src=""></img>
                                <div className="main__content-comments-card__section">
                                    <div className="main__content-comments-card__heading">
                                        <h4 className="main__content-comments-card__heading-h4">Theodore Duncan</h4>
                                        <span className="main__content-comments-card__heading-date">11/15/2019</span>
                                    </div>
                                    <p className="main__content-comments-card__message">How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!</p>
                                </div>
                            </li>
                        </ul>
                    </article>
                </article>
                {/* SIDE VIDEOS LIST */}
                <article className="main__content-sideVideo">
                    <h4 className="main__content-sideVideo-title">Next Video</h4>
                    <div className="main__content-sideVideo-item">
                        <img className="main__content-sideVideo-item__video" alt="side video" src={Video1}></img>
                        <div className="main__content-sideVideo-item__heading">
                            <h4 className="main__content-sideVideo-item__heading-title">Become A Travel Pro In One Easy Lesson...</h4>
                            <span>Scotty Cranmer</span>
                        </div>
                    </div>
                </article>
            </section>
        );
    }
}
export default MainContent;