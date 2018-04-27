import React, { Component } from 'react'
import styled from "styled-components";

const ReviewTime = styled.span`
    color: #999;
    font-size: 13px;
    padding-left: 6px;
`;

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