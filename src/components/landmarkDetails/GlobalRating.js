import React, {Component} from 'react'
import {SimpleRating} from "../shared/landmarks";
import {ReviewMainWrapper, RtRevqWrapper} from "./style";


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