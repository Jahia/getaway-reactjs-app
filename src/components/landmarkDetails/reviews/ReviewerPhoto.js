import React, {Component} from 'react'
import styled from "styled-components";

class ReviewerPhoto extends Component {

    render() {
        const photoUrl = this.props.photoUrl;
        if(photoUrl) {
            return(
                <ReviewerPhotoWrapper>
                    <img src={photoUrl} alt="User"/>
                </ReviewerPhotoWrapper>
            );
        }
    }
}

export default (ReviewerPhoto)


const ReviewerPhotoWrapper = styled.div`
    img {
        width: 52px;
        height: 52px;
    }
`;

