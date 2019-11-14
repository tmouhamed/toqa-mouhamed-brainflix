import React from 'react';
import './Comment.scss';
import Avatar from '../../assets/Images/Mohan-muruge.jpg';

class Comment extends React.Component {
    postedDate = (date) => {

        if (!date) {
            return null;
        }
        let commentDate = new Date(date).getTime();
        let today = new Date().getTime();
        let difference = today - commentDate;

        // IN SECONDS
        difference = difference / 1000;
        let seconds = Math.floor(difference % 60);

        // IN MINUTES
        difference = difference / 60;
        let minutes = Math.floor(difference % 60);

        // IN HOURS
        difference = difference / 60;
        let hours = Math.floor(difference % 24);

        // IN DAYS
        let days = Math.floor(difference / 24);

        let actualDate;
        if (days > 0) {
            actualDate = `${days} days ago`;
        }
        else if (days === 0 & hours > 0) {
            actualDate = `${hours} hours ago`;
        }
        else if (hours === 0 & minutes > 0) {
            actualDate = `${minutes} minutes ago`;
        }
        else {
            actualDate = `${seconds} seconds ago`;
        };
        return actualDate
    }
    render() {
        console.log(this.props);
        return (
            <article className="main__content-comments">
                <h4 className="main__content-comments-title">{this.props.mainVideo.comments.length} Comments</h4>

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
                    {this.props.mainVideo.comments.map((item) => {
                        return (
                            <li className="main__content-comments-card" id={item.id} key={item.id}>
                                <img className="main__content-comments-card__picture" alt="" src=""></img>
                                <div className="main__content-comments-card__section">
                                    <div className="main__content-comments-card__heading">
                                        <h4 className="main__content-comments-card__heading-h4">{item.name}</h4>
                                        <span className="main__content-comments-card__heading-date">{this.postedDate(item.timestamp)}</span>
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