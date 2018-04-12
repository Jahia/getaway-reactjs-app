import React, {Component} from 'react'

class ReviewerPhoto extends Component {

    render() {
        const photoUrl = this.props.photoUrl;
        if(photoUrl) {
            return(
                <div className="reviewer-photo">
                    <img src={photoUrl} alt="User photo"/>
                </div>
            );
        }
    }
}

export default (ReviewerPhoto)