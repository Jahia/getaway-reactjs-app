import React, {Component} from 'react'
import ReviewCard from "./ReviewCard";
import {ReviewCommentsWrapper} from "./style";

class ReviewCards extends Component {

    render() {
        const reviews = this.props.reviews;
        if(reviews) {
            const max = this.props.max;
            const reviewsToDisplay = max ? reviews.slice(0, max) : reviews;

            return (
                <ReviewCommentsWrapper>
                    {reviewsToDisplay.map((review, index) => (<ReviewCard review={review} key={index}/>))}
                </ReviewCommentsWrapper>
            );
        }

        return null;
    }
}

export default (ReviewCards)