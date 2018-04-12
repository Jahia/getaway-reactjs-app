import React, {Component} from 'react'
import ReviewRating from "../landmarkDetails/ReviewRating"
import ReviewerPhoto from "../landmarkDetails/ReviewerPhoto"

class ReviewCard extends Component {

    render() {
        const review = this.props.review;
        if(review) {
            return (
                <div className="review-comment-card">
                    <ReviewerPhoto photoUrl={review.profilePhotoUrl}/>
                    <div className="reviewer-review">
                        <div className="reviewer-name">{review.authorName}</div>
                        <div>
                           <ReviewRating value={review.rating} timeDesc={review.timeDesc}/>
                        </div>
                        <div className="review-text">
                            <p>{review.value}</p>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default (ReviewCard)