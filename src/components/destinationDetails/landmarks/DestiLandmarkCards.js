import React, {Component} from 'react';
import {LandmarkCard} from "../../shared/landmarks";
import styled from "styled-components";


class DestiLandmarkCards extends Component {

    /**
     * Renders a landmark card
     * @param {String} landmarkPlaceId - The Get away landmark that needs to be rendered
     * @return {Object} The landmark card rendered
     */
    renderLandmark(landmark) {
        if (landmark) {
            return (<LandmarkCard landmark={landmark} key={landmark.name}/>)
        }

        return null;
    }

    render() {
        const landmarks = this.props.landmarks;
        if (landmarks) {
            return (
                <DestinationLandmarksWrapper>
                    <h2>Landmarks</h2>
                    <div className="landmark-card-container">
                        {landmarks.map(landmark => (this.renderLandmark(landmark)))}
                    </div>
                </DestinationLandmarksWrapper>
            );
        }

        return null;
    }
}

export default (DestiLandmarkCards)


export const DestinationLandmarksWrapper = styled.section`
    max-width: 1080px;
    margin: 0 auto;
    margin-top: 30px;
    
    h2 {
        font-size: 18px;
        opacity: .67;
        font-weight: 500;
        margin-top: 16px;
        margin-bottom: 8px;
        border-bottom: 2px dotted #ccc;
        @media screen and (max-width: 1080px) {
            margin: 16px 16px 8px 16px;
        }
    }
}
`;
