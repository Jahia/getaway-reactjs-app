import React, {Component} from 'react'
import WikipediaApi from "../external/WikipediaApi";
import WikipediaMapper from "../external/WikipediaMapper";
import GetawayConstants from "../../utils/GetawayConstants";
import styled from "styled-components";

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


const LandmarkInfoWrapper = styled.section`
    max-width: 1080px;
    margin: 0 auto;
    span {
        a {
            margin-left: 6px;
            color: #1E88E5;
        }
    }
    
    p {
        width: 720px;
        margin: 0 auto;
        font-size: 18px;
        line-height: 31px;
        margin-bottom: 30px;
        @media screen and (max-width: 720px) {
            width: 100%;
            padding: 0 30px;
            box-sizing: border-box;
        }  
    }
`;

const LandmarkTitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media screen and (max-width: 480px) {
        display: block;
        text-align: center;
    }
    
    h1 {
        font-size: 30px;
        color: rgba(0, 0, 0, 0.84);
        margin: 15px 0;
        font-weight: 400;
        @media screen and (max-width: 480px) {
            margin-bottom: -20px;
        }
    }
    
    h2 {
        text-decoration: none;
        color: rgb(255, 56, 124);
        font-size: 16px;
        margin-left: 18px;
        margin-top: 26px;
        height: 24px;
        border: 2px solid #ff387c;
        padding: 2px 12px;
        border-radius: 50px;
        padding-top: 0;
        cursor: pointer;
        @media screen and (max-width: 480px) {
            background: #ff387c;
            color: #fff;
            margin-left: 0;
            margin-bottom: 18px;
            display: inline-block;
        }
    }
`;