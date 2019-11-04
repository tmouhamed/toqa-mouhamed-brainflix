import React from 'react';
import './comment.scss';
import Avatar from '../../assets/Images/Mohan-muruge.jpg';

class Comment extends React.Component {
    render() {
        return (

            <article className="main__content-comments">
                <h4 className="main__content-comments-title">{this.props.mainVideo.comment.length} Comments</h4>

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
                    {this.props.mainVideo.comment.map((item) => {
                        return (
                            <li className="main__content-comments-card" id={item.id} key={item.id}>
                                <img className="main__content-comments-card__picture" alt="" src=""></img>
                                <div className="main__content-comments-card__section">
                                    <div className="main__content-comments-card__heading">
                                        <h4 className="main__content-comments-card__heading-h4">{item.name}</h4>
                                        <span className="main__content-comments-card__heading-date">{item.timestamp}</span>
                                    </div>
                                    <p className="main__content-comments-card__message">{item.comment}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </article>
        );
    }

}

export default Comment;