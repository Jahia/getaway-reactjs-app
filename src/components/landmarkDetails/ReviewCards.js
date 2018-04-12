import React, {Component} from 'react'
import ReviewCard from "../landmarkDetails/ReviewCard"

class ReviewCards extends Component {

    render() {
        const reviews = this.props.reviews;
        if(reviews) {
            return (
                <div className="review-comments-container">
                    {reviews.map(review => (<ReviewCard review={review}/>))}
                </div>
            );
        }

        return null;
    }
}

export default (ReviewCards)