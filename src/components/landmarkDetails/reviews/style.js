import styled from "styled-components";

export const ReviewCommentsWrapper = styled.div`
    margin-bottom: 30px;
`;

export const ReviewCommentCardWrapper = styled.div`
    width: 50%;
    box-sizing: border-box;
    padding: 16px;
    display: flex;
    flex-direction: row;
    float: left;
    @media screen and (max-width: 680px) {
        width: 100%;
        float: none;
    }
`;

export const ReviewerReviewWrapper = styled.div`
        margin-left: 12px;
`;

export const ReviewerNameWrapper = styled.div`
    font-size: 16px;
    font-weight: 600;
    margin-bottom: -2px;
`;

export const ReviewTextWrapper = styled.div`
    p {
        color: #222;
        font-size: 13px;
        line-height: 18px;
        max-width: 100%;
        overflow: hidden;
        white-space: pre-wrap;
        padding-top: 4px;
    }
`;

export const ReviewerPhotoWrapper = styled.div`
    img {
        width: 52px;
        height: 52px;
    }
`;

export const ReviewTime = styled.span`
    color: #999;
    font-size: 13px;
    padding-left: 6px;
`;