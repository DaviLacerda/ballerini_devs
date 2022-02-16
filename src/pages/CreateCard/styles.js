import styled from "styled-components";

export const CreateCardContainer = styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    gap:12px;

    img{
        width:256px;
        height:256px;
        border-radius:50%;
        border:3px solid #27AE60;
    }

    input[type="text"]{
        width:200px;
        height:40px;
        padding:8px;
        border-radius:10px;
        border:none;
        outline:none;
    }

    button{
        position:relative;
        width:240px;
        padding:16px;
        border-radius:30px;
        background-color:#27AE60;
        color:#fff;
        border:none;
        font-size:24px;
        transition:all .5s;

        &:hover{
            cursor:pointer;
            background-color:#27AE6055;
        }

        &:focus, &:active{
            transform:scale(0.95);
        }

        &:after{
            position:absolute;
            bottom:-20px;
            left:85px;

            content:' ';
            width:70px;
            height:2px;
            background:#27AE60;
        }
    }
`;
