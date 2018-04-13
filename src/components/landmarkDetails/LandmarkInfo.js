import React, {Component} from 'react'

class LandmarkInfo extends Component {

    render() {
        const landmarkName = this.props.landmarkName;
        const locationName = this.props.locationName;

        // at least the name should be available
        if(landmarkName) {
            return (
                <section className="landmarkInfoSection">
                    <div className="landmark-title">
                        <h1>{landmarkName}</h1>
                        <h2>{locationName}</h2>
                    </div>
                </section>
            );
        }

        return null;
    }
}

export default (LandmarkInfo)