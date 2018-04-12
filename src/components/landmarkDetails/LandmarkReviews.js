import React, {Component} from 'react'
import ReviewCards from "../landmarkDetails/ReviewCards"
import GlobalRating from "../landmarkDetails/GlobalRating"

class LandmarkReviews extends Component {

    render() {
        const globalRating = this.props.globalRating;
        const reviews = this.props.reviews;
        return (
            <section className="landmarkReviewsSection">
                <h2>Reviews</h2>
                <GlobalRating rating={globalRating}/>
                <ReviewCards reviews={reviews}/>
            </section>
        );
    }
}

export default LandmarkReviews
