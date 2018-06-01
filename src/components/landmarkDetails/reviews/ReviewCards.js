import React, {Component} from 'react';
import ReviewCard from "./ReviewCard";
import styled from "styled-components";

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


const ReviewCommentsWrapper = styled.div`
    margin-bottom: 30px;
`;