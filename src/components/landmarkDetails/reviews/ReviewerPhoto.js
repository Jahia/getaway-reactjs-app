import React, {Component} from 'react'
import {ReviewerPhotoWrapper} from "./style";


class ReviewerPhoto extends Component {

    render() {
        const photoUrl = this.props.photoUrl;
        if(photoUrl) {
            return(
                <ReviewerPhotoWrapper>
                    <img src={photoUrl} alt="User photo"/>
                </ReviewerPhotoWrapper>
            );
        }
    }
}

export default (ReviewerPhoto)