import React, {Component} from 'react'
import {ReviewCommentCardWrapper, ReviewerNameWrapper, ReviewerReviewWrapper, ReviewTextWrapper} from "./style";
import ReviewerPhoto from "./ReviewerPhoto";
import ReviewRating from "./ReviewRating";

class ReviewCard extends Component {

    render() {
        const review = this.props.review;
        if(review) {
            return (
                <ReviewCommentCardWrapper>
                    <ReviewerPhoto photoUrl={review.profilePhotoUrl}/>
                    <ReviewerReviewWrapper>
                        <ReviewerNameWrapper>{review.authorName}</ReviewerNameWrapper>
                        <div>
                           <ReviewRating value={review.rating} timeDesc={review.timeDesc}/>
                        </div>
                        <ReviewTextWrapper>
                            <p>{review.value}</p>
                        </ReviewTextWrapper>
                    </ReviewerReviewWrapper>
                </ReviewCommentCardWrapper>
            );
        }
    }
}

export default (ReviewCard)