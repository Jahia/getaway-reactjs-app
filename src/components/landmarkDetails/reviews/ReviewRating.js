import React, { Component } from 'react'
import {ReviewTime} from "./style";


class ReviewRating extends Component {
    render() {
        const value = this.props.value;
        const timeDescription = this.props.timeDesc;
        if(value) {
            return (
                <div className="landmark-rating">
                    <span className="rt-bg">
                        <span data-rating={value}></span>
                    </span>
                    <ReviewTime>{timeDescription}</ReviewTime>
                </div>
            )
        } else {
            return "Not rated";
        }
    }
}

export default ReviewRating