import React, {Component} from 'react';
import {SimpleRating} from "../shared/landmarks";
import styled from "styled-components";

class GlobalRating extends Component {

    render() {
        const rating = this.props.rating;
        if(rating) {
            return (
                <ReviewMainWrapper>
                    <SimpleRating value={rating} primaryValue={true}/>
                    <RtRevqWrapper>Global Rating</RtRevqWrapper>
                </ReviewMainWrapper>
            );
        }

        return null;
    }
}

export default (GlobalRating)

const ReviewMainWrapper = styled.div`
    text-align: center;
    margin-top: 8px;
    margin-bottom: 15px;
`;

const RtRevqWrapper = styled.div`
    color: #878787;
    font-size: 16px;
`;
