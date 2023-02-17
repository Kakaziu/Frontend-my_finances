import styled from "styled-components";

export const HeaderDiv = styled.header`
    background-color: transparent;
    position: absolute;
    width: 100%;
    z-index: 9997;
    padding: 15px 0px;
`

export const Container = styled.div`
    margin: auto;
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a{
        padding: 10px 40px;
        font-size: 16px;
        border: none;
        border-radius: 4px;
        background-color: rgba(255, 255, 255, 0.2);
        color: white;
        transition: 0.3s;
        cursor: pointer;
        text-decoration: none;

        &:hover{
            background-color: rgba(255, 255, 255, 0.4);
        }

        @media (max-width: 400px){
            font-size: 14px;
            padding: 10px 25px;
        }   
    }
`

export const Logo = styled.h2`
    color: white;

    @media (max-width: 850px){
        font-size: 22px;
    }

    @media (max-width: 400px){
        font-size: 20px;
    }
`

export const Menu = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
`

export const Item = styled.li`
    margin-left: 35px;
    cursor: pointer;

    @media (max-width: 400px){
        margin-left: 25px;
    }
`

export const Button = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
    transition: 0.3s;
    cursor: pointer;

    &:hover{
        background-color: rgba(255, 255, 255, 0.4);
    }

    @media (max-width: 850px){
        display: none;
    }
`

