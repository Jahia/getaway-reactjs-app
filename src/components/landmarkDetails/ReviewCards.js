import React, {Component} from 'react'
import ReviewCard from "../landmarkDetails/ReviewCard"

class ReviewCards extends Component {

    render() {
        const reviews = this.props.reviews;
        if(reviews) {
            const max = this.props.max;
            const reviewsToDisplay = max ? reviews.slice(0, max) : reviews;

            return (
                <div className="review-comments-container">
                    {reviewsToDisplay.map(review => (<ReviewCard review={review}/>))}
                </div>
            );
        }

        return null;
    }
}

export default (ReviewCards)