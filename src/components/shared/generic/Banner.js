import React, { Component } from 'react';
import styled from "styled-components";
import Typist from 'react-typist';
import topSectionImg from "../../../images/rio-de-janeiro.jpg";
import {graphql} from 'react-apollo';
import gql from "graphql-tag";
import {withRouter} from 'react-router-dom';
import GetawayConfigs from "../../../utils/GetawayConfigs";


const GQL_QUERY = gql`
query DestinationsQuery($query: String!) {
  jcr(workspace:LIVE) {
    nodesByQuery(query: $query) {
      nodes {
        name
      }
    }
  }
}`;

function mapPropsToOptions(props) {
    const query = "select * from [gant:destination] where isdescendantnode('/sites/" + GetawayConfigs.dxSiteKey + "/contents')";
    return {
        skip: false,
        variables: {
            query: query,
        }
    }
}

function mapResultsToProps(results) {
    if (results && results.destination && results.destination.jcr
        && results.destination.jcr.nodesByQuery && results.destination.jcr.nodesByQuery.nodes) {
        const randomDest = results.destination.jcr.nodesByQuery.nodes;
        const randomIdx = Math.floor(Math.random() * Math.floor(randomDest.length));
        return {randomDest: randomDest[randomIdx].name};
    }
    return null;
}



class Banner extends Component {

    buildInlineStyle() {
        const headerPhoto = this.props.headerPhoto;
        if(headerPhoto) {
            return { backgroundImage: "url(" + headerPhoto+ ")" };
        }

        return null;
    }

    render() {
        const destiName = this.props.destinationName;
        const destiCountry = this.props.destinationCountry;
        const inlineStyle = this.buildInlineStyle();
        const goToDestination = () => {
            this.props.history.push({
                pathname: `/destination/${this.props.randomDest}`
            });
        };

        if (destiName && destiCountry) {
            return (
                <BannerTopSectionDestWrapper style={inlineStyle}>
                    <BannerShadowOverlayWrapper1/>
                        <h1><Typist avgTypingDelay={40} stdTypingDelay={1} startDelay={400} cursor={{hideWhenDone:true, hideWhenDoneDelay:0}}>{destiName}</Typist></h1>
                        <h3><Typist avgTypingDelay={40} stdTypingDelay={1} startDelay={800} cursor={{hideWhenDone:true,hideWhenDoneDelay:0}}>{destiCountry}</Typist></h3>
                </BannerTopSectionDestWrapper>
            );
        } else {
            return (
                <BannerTopSectionWrapper style={inlineStyle}>
                    <BannerShadowOverlayWrapper/>
                        <h1><Typist avgTypingDelay={40} startDelay={400} cursor={{hideWhenDone:true, hideWhenDoneDelay:0}}>Find your next vacation idea among these places handpicked just for you!</Typist></h1>
                        <BannerCtaWrapper >
                            <a onClick={goToDestination} >Take me somewhere!</a>
                    </BannerCtaWrapper>
                </BannerTopSectionWrapper>
            );
        }
    }
}

export default withRouter(graphql(GQL_QUERY, {
    name: 'destination',
    props: mapResultsToProps,
    options: mapPropsToOptions
})(Banner))


const BannerTopSectionWrapper = styled.section`
    background: url(${topSectionImg});
    width: 100%;
    height: 340px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    margin-bottom: 30px;
    @media screen and (max-width: 840px) {
        height: 300px;
    }
    @media screen and (max-width: 520px) {
        height: 270px;
    }
    h1 {
        color: #fff;
        text-align: center;
        top: 175px;
        position: absolute;
        width: 100%;
        font-weight: 500;
        font-size: 24px;
        @media screen and (max-width: 840px) {
            top: 150px;
            font-size: 20px;
        }
        @media screen and (max-width: 700px) {
            font-size: 18px;
            padding: 0 8px;
            box-sizing: border-box;
        }
        @media screen and (max-width: 520px) {
            top: 120px;
            padding: 0 16px;
        }
    }
`;

const BannerShadowOverlayWrapper = styled.div`
    background: linear-gradient(113deg, rgba(249, 123, 92, 0.64) 6%,rgba(176, 77, 230, 0.64) 97%);
    height: 340px;
    width: 100%;
    
    @media screen and (max-width: 840px) {
        height: 300px;
        
    }
    @media screen and (max-width: 840px) {
        height: 300px;
        
    }
    @media screen and (max-width: 520px) {
        height: 270px;
    }
`;
const BannerShadowOverlayWrapper1 = styled.div`
    background: linear-gradient(113deg, rgba(249, 123, 92, 0.64) 6%,rgba(176, 77, 230, 0.64) 97%);
    height: 340px;
    width: 100%;
    
    @media screen and (max-width: 840px) {
        height: 300px;
        
    }
    @media screen and (max-width: 840px) {
        height: 300px;
        
    }
    @media screen and (max-width: 520px) {
        height: 200px;
    }
`;

const BannerCtaWrapper = styled.div`
    margin: 0 auto;
    left: 0;
    right: 0;
    width: 220px;
    text-align: center;
    position: absolute;
    top: 255px;
    @media screen and (max-width: 840px) {
        top: 220px;
    }
    a {
        color: #fff;
        border: 2px solid #fff;
        padding: 5px 16px;
        border-radius: 50px;
        text-decoration: none;
        cursor:pointer;
        font-weight: 500;
        @media screen and (max-width: 520px) {
            background: white;
            color: #220b38;
            font-size: 14px;
        }
    }
`;

const BannerTopSectionDestWrapper = styled.section`
    width: 100%;
    height: 340px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 -80px;
    margin-bottom: 8px;
    @media screen and (max-width: 840px) {
        height: 300px;
        background-position: initial;
    }
    @media screen and (max-width: 520px) {
        height: 200px;
    }
    h1 {
        color: rgba(255, 255, 255, 0.22);
        text-align: center;
        top: 24px;
        position: absolute;
        width: 100%;
        font-weight: 500;
        font-size: 150px;
        @media screen and (max-width: 840px) {
            top: 70px;
            font-size: 90px;
        }
        @media screen and (max-width: 700px) {
            padding: 0 8px;
            box-sizing: border-box;
        }
        @media screen and (max-width: 520px) {
            top: 30px;
            padding: 0 16px;
            font-size: 60px;
        }
    }
    h3 {
        color: #ffffff;
        opacity: .64;
        text-align: center;
        font-weight: 500;
        font-size: 22px;
        top: 270px;
        position: absolute;
        width: 100%;
        letter-spacing: .8px;
        @media screen and (max-width: 840px) {
            top: 240px;
        }
        @media screen and (max-width: 520px) {
            top: 120px;
        }
    }
`;