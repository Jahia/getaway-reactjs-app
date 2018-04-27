import styled from "styled-components";

export const ErrorWrapper = styled.section`
    text-align: center;
    margin-bottom: 52px;
    min-height: calc(100% - 240px);
    
    h1 {
        font-size: 150px;
        color: #926eb6;
        padding: 0;
    }
    
    h2 {
        font-size: 32px;
        color: #ccc;
        padding: 0;
        margin-top: -62px;
        margin-bottom: 30px;
        font-weight: 500;
    }
    
    h3 {
        font-size: 17px;
        color: #b5b5b5;
        padding: 0;
        font-weight: 500;
        margin-bottom: 40px;
        margin-top: -10px;
    }
    
    img {
        width: 520px;
    }
    
    a {
        text-decoration: none;
        cursor: pointer;
        color: #fff;
        background: linear-gradient(113deg, rgb(249, 123, 92) 6%,rgb(176, 77, 230) 97%);
        text-align: center;
        padding: 4px 18px;
        border-radius: 50px;
        font-size: 16px;
        font-weight: 500;
        -webkit-transition: all 150ms ease-in-out;
        -moz-transition: all 150ms ease-in-out;
        -ms-transition: all 150ms ease-in-out;
        -o-transition: all 150ms ease-in-out;
        transition: all 150ms ease-in-out;
        
        &:hover {
            box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
        }
    }
`;

export const ErrorSeparatorWrapper = styled.div`
    background: #f1f1f1;
    width: 100%;
    height: 4px;
    position: absolute;
    margin-top: -54px;
    left: 0;
`;