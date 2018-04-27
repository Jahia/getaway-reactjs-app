import React, {Component} from 'react'
import styled from "styled-components";
import ReviewCards from "../landmarkDetails/ReviewCards"
import GlobalRating from "../landmarkDetails/GlobalRating"

const LandmarkReviewsWrapper = styled.section`
    max-width: 1080px;
    margin: 0 auto;
    h2 {
        font-size: 18px;
        opacity: .67;
        font-weight: 500;
        margin-top: 16px;
        margin-bottom: 8px;
        border-bottom: 2px dotted #ccc;
        @media screen and (max-width: 1080px) {
            margin: 16px 16px 8px 16px;
        }
    }
`;

const ReviewsSeparatorWrapper = styled.div`
    width: 100%;
    float: left;
    text-align: center;
    padding-bottom: 30px;
    height: 27px;
`;

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
