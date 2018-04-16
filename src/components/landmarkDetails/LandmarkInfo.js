import React, {Component} from 'react'
import WikipediaApi from "../external/WikipediaApi";
import WikipediaMapper from "../external/WikipediaMapper";

class LandmarkInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            landmarkDesc: null
        }
    }

    componentDidMount() {
        const landmarkName = this.props.landmarkName;

        if(landmarkName) {
            const wikiApi = new WikipediaApi();
            wikiApi.getPageExtract(landmarkName)
                .then(function(response) {
                    const wikiMapper = new WikipediaMapper();
                    const extract = wikiMapper.retrieveExtract(response);

                    this.setState({landmarkDesc: extract});

                }.bind(this))
                .catch(function(error) {
                    console.log("There was an error while calling the Wikipedia API:" + error.toString());
                });
        }
    }

    render() {
        const landmarkName = this.props.landmarkName;
        const locationName = this.props.locationName;

        // at least the name should be available
        if(landmarkName) {
            const desc = this.state.landmarkDesc;
            const renderedDescription = desc ? <p>{desc}</p> : null;

            return (
                <section className="landmarkInfoSection">
                    <div className="landmark-title">
                        <h1>{landmarkName}</h1>
                        <h2>{locationName}</h2>
                    </div>
                    {renderedDescription}
                </section>
            );
        }

        return null;
    }
}

export default (LandmarkInfo)