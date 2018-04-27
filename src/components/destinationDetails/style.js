import styled from "styled-components";

export const DestinationInfoWrapper = styled.section`
    max-width: 1080px;
    margin: 0 auto;
    h2 {
        font-size: 24px;
        opacity: .87;
        font-weight: 400;
        margin: 16px 0;
        margin-top: 30px;
        text-align: center;
        line-height: 38px;
        width: 100%;
        @media screen and (max-width: 840px) {
            margin-top: 40px;
            padding: 0 16px;
            box-sizing: border-box;
        }
    }
`;

export const InfoContainerWrapper = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 4px 16px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const InfoElementWrapper = styled.div`
    margin: 4px 0;
    height: 32px;
    padding-right: 30px;
    position: relative;
    @media screen and (max-width: 840px) {
        padding-right: 0;
        padding: 0 26px;
    }
    @media screen and (max-width: 600px) {
        width: calc(50% - 54px);
        display: inline-block;
    }
    
    i {
        position: absolute;
        top: 4px;
        left: 2px;
        opacity: .52;
        font-size: 22px;
        @media screen and (max-width: 960px) {
            display: none;
        }
    }
    
    b {
        line-height: 32px;
        padding-left: 36px;
        opacity: .67;
        @media screen and (max-width: 960px) {
            padding-left: 16px;
        }
        @media screen and (max-width: 840px) {
            padding-left: 0;
        }
        @media screen and (max-width: 700px) {
            font-size: 14px;
        }
    }
    
    span {
        padding-left: 8px;
        opacity: .52;
        font-weight: 500;
        @media screen and (max-width: 840px) {
            display: block;
            margin-top: -4px;
            padding-left: 0;
        }
        @media screen and (max-width: 700px) {
            margin-top: -6px;
            padding-left: 0;
            font-size: 14px;
        }
    }
`;

export const MainOutlineWrapper = styled.section`
    max-width: 1080px;
    margin: 0 auto;
`;

export const OutlineWrapper = styled.section`
    padding: 16px;
    margin: 20px auto;
    max-width: 760px; 
    margin-bottom: 30px;
    font-size: 18px;
    line-height: 31px;
    p {
        margin-bottom: 20px;
    }
`;

export const ReadmoreWrapper = styled.div`
    position: relative;
    text-decoration: none;
    cursor: text;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TriggerWrapper = styled.span`
    display: block;
    position: absolute;
    bottom: -8px;
    cursor: pointer;
    color: #983efc;
    text-align: center;
    border: 2px solid #983efc;
    padding: 2px 16px;
    border-radius: 50px;
    font-size: 16px;
    font-weight: 500;
`;

export const ExpandedTriggerWrapper = styled.span`
    opacity: 0;
    visibility: hidden;
`;

export const OutlineTextWrapper = styled.article`
    position: relative;
    overflow: hidden;
    max-height: 240px;
    margin-bottom: 30px;
    transition: max-height 500ms ease;
    &::before {
        content: '';
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, white 50%, white 100%);
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 78.4px;
        transition: opactiy 500ms ease, visibility 500ms ease;
    }
`;

export const OutlineExpandedTextWrapper = styled.div`
    max-height: 6000px;
    &::before {
        opacity: 0;
        visibility: hidden;
    }
`;