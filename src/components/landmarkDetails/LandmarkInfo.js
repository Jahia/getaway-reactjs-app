import React, {Component} from 'react'
import WikipediaApi from "../external/WikipediaApi";
import WikipediaMapper from "../external/WikipediaMapper";
import GetawayConstants from "../../utils/GetawayConstants";
import {LandmarkInfoWrapper, LandmarkTitleWrapper} from "./style";


class LandmarkInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageInfo: null,
        }
    }

    componentDidMount() {
        const landmarkName = this.props.landmarkName;

        if(landmarkName) {
            const wikiApi = new WikipediaApi();
            wikiApi.getPageExtract(landmarkName)
                .then(function(response) {
                    const wikiMapper = new WikipediaMapper();
                    const pageInfo = wikiMapper.retrievePageInfo(response);
                    this.setState({
                        pageInfo: pageInfo
                    });

                }.bind(this))
                .catch(function(error) {
                    console.info("There was an error while calling the Wikipedia API:" + error.toString());
                });
        }
    }

    render() {
        const landmarkName = this.props.landmarkName;
        const locationName = this.props.locationName;

        // at least the name should be available
        if(landmarkName) {
            const pageInfo = this.state.pageInfo;

            let renderedDesc = null;
            if(pageInfo && pageInfo.extract && pageInfo.pageId) {
                const pageUrl = GetawayConstants.WIKIPEDIA_PAGE_URL() + pageInfo.pageId;
                renderedDesc = <p>{pageInfo.extract}<span><a href={pageUrl}>Wikipedia</a></span></p>;
            }

            return (
                <LandmarkInfoWrapper>
                    <LandmarkTitleWrapper>
                        <h1>{landmarkName}</h1>
                        <h2>{locationName}</h2>
                    </LandmarkTitleWrapper>
                    {renderedDesc}
                </LandmarkInfoWrapper>
            );
        }

        return null;
    }
}

export default (LandmarkInfo)