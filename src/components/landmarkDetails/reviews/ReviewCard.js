import React, {Component} from 'react'
import styled from "styled-components";
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


const ReviewCommentCardWrapper = styled.div`
    width: 50%;
    box-sizing: border-box;
    padding: 16px;
    display: flex;
    flex-direction: row;
    float: left;
    @media screen and (max-width: 680px) {
        width: 100%;
        float: none;
    }
`;

const ReviewerReviewWrapper = styled.div`
        margin-left: 12px;
`;

const ReviewerNameWrapper = styled.div`
    font-size: 16px;
    font-weight: 600;
    margin-bottom: -2px;
`;

const ReviewTextWrapper = styled.div`
    p {
        color: #222;
        font-size: 13px;
        line-height: 18px;
        max-width: 100%;
        overflow: hidden;
        white-space: pre-wrap;
        padding-top: 4px;
    }
`;