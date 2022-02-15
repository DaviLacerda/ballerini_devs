import styled from 'styled-components';

export const HomeContainer = styled.div`
    position:relative;
    width:100%;
    height:fit-content;
    

    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;

    @media(min-width:900px){
        height:100vh;
    }

    .blobs{
        position:absolute;
        left:0;
        bottom:0;
        z-index:-1;
        width:100%;
        height:100%;

        @media(min-width:900px){
            width:fit-content;
            height:fit-content;
        }
    }
`

export const HomeContentContainer = styled.div`
    width:100%;
    height:100%;

    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;

    padding:0 16px;

    @media(min-width:900px){
        flex-direction:row;
    }
`

export const HomeContentContainer__Left = styled.div`
    display:flex;
    flex-direction:column;
    gap:12px;

    max-width:560px;
    width:100%;
    height:100%;

    @media(min-width:900px){
        max-height:370px;
    }

    h1{
        font-size:48px;
        font-weight:bold;
        color:#D2D2D2;
    }

    p{
        font-size:24px;
        color:#A9A9A9;
        margin-bottom:50px;
    }

    a{
        width:fit-content;
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
`

export const HomeContentContainer__Right = styled.div`
    img{
        min-width:156px;
        min-height:156px;

        width:100%;
        height:100%;
    }
`