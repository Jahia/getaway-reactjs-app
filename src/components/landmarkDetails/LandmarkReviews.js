import React, {Component} from 'react'
import ReviewCards from "../landmarkDetails/ReviewCards"
import GlobalRating from "../landmarkDetails/GlobalRating"


class LandmarkReviews extends Component {

    render() {
        const globalRating = this.props.globalRating;
        const reviews = this.props.reviews;
        return (
            <div>
                <section className="landmarkReviewsSection">
                    <h2>Reviews</h2>
                    <GlobalRating rating={globalRating}/>
                    <ReviewCards max="4" reviews={reviews}/>
                </section>
                <div className="reviews-separator"></div>
            </div>
        );
    }
}

export default LandmarkReviews
