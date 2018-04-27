import React, {Component} from 'react'
import styled from "styled-components";

const ReviewerPhotoWrapper = styled.div`
    img {
        width: 52px;
        height: 52px;
    }
`;

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