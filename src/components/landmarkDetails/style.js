import styled from "styled-components";

export const LandmarkInfoWrapper = styled.section`
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

export const LandmarkTitleWrapper = styled.div`
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

export const LandmarkReviewsWrapper = styled.section`
    max-width: 1080px;
    margin: 0 auto;
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
`;

export const ReviewsSeparatorWrapper = styled.div`
    width: 100%;
    float: left;
    text-align: center;
    padding-bottom: 30px;
    height: 27px;
`;
