import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #ffd9e7;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Form = styled.form`
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 30px;
    text-align: center;
    width: 400px;

    strong{
        color: #f7206f;
        font-size: 22px;
    }

    p{
        font-weight: bold; 
    }

    button{
        margin-top: 40px;
        padding: 10px 20px;
        border-radius: 4px;
        border: none;
        background-color: #f7206f;
        color: white;
        font-size: 16px;
        width: 100%;
        cursor: pointer;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;

        span{
            margin: 2px 0px 0px 5px!important;
            width: 5% !important;
            padding: 0px !important;
            text-align: center !important;
        }

        &:hover{
            background-color: #db1d63;
        }
    }

    span{
        font-size: 11px;
        display: block;
        padding: 0px 20px;
        margin-top: 5px;
        width: 100%;
        text-align: left;
        color: red;
    }

    @media (max-width: 450px){
        width: 75%;
    }
`

export const InputContainer = styled.div`
    position: relative;
    width: 100%;

    label{
        position: absolute;
        top: 28.5px;
        left: 20px;

        @media (max-width: 450px){
            left: 10px;
            top: 29px;
            z-index: 9999;
        }
    }

    input{
        margin-top: 20px;
        width: 80%;
        border: none;
        border-radius: 20px;
        padding: 10px 20px 10px 50px;
        font-size: 14px;
        outline: 0;

        &::placeholder{
            color: #adadad;
        }

        @media (max-width: 450px){
            position: relative;
            right: 12px;
        }
    }
`

export const RegisterWay = styled.span`
    text-align: center !important;
    display: inline !important;
    width: 100%;
    color: #82838f !important;
    font-size: 10px !important;

    a{
        text-decoration: none;
    }
`
