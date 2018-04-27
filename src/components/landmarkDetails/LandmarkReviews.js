import React, {Component} from 'react'
import {LandmarkReviewsWrapper, ReviewsSeparatorWrapper} from "./style";
import {ReviewCards} from "./reviews";
import GlobalRating from "./GlobalRating";


class LandmarkReviews extends Component {

    render() {
        const globalRating = this.props.globalRating;
        const reviews = this.props.reviews;
        return (
            <div>
                <LandmarkReviewsWrapper>
                    <h2>Reviews</h2>
                    <GlobalRating rating={globalRating}/>
                    <ReviewCards max="4" reviews={reviews}/>
                </LandmarkReviewsWrapper>
                <ReviewsSeparatorWrapper/>
            </div>
        );
    }
}

export default LandmarkReviews
