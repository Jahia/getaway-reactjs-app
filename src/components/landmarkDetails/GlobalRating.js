import React, {Component} from 'react'
import SimpleRating from "../landmarks/SimpleRating";

class GlobalRating extends Component {

    render() {
        const rating = this.props.rating;
        if(rating) {
            return (
                <div className="review-main">
                    <SimpleRating value={rating}/>
                    <div className="rt-revq">TO BE MAPPED</div>
                </div>
            );
        }

        return null;
    }
}

export default (GlobalRating)