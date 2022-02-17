import styled from 'styled-components';

export const UserContainer = styled.div`
    width:100%;
    height:80vh;

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

export const CardsDisplay = styled.div`
    width:80%;
    height:50%;

    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    gap:30px;

    .swiper{
        width:80%;
        min-width:240px;
    }

    .swiper-slide-active{
        width:fit-content;
        height:fit-content;
    }

    .swiper-button-prev, .swiper-button-next{
        width:48px;
        height:48px;
        color: #F9F9F980;
        border-radius:50%;
        border:3px solid #F9F9F980;

        &:after{
            font-size:1.2em;
            font-weight:bold;
        }
    }
`

export const DevInput = styled.input`
    position:fixed;

    width:200px;
    height:40px;
    padding:8px;
    border-radius:10px;
    border:none;
    outline:none;

    @media(max-width:600px){
        top:150px;
        left:5vw;
    }

    @media(min-width:600px){
        top:5vh;
        right:5vw;
    }
`

export const Card = styled.div`
    width:100%;
    max-width:400px;
    height:500px;

    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    gap:8px;

    background-color:#F9F9F924;

    @media(min-width:1200px){
        width:400px;
    }

    img{
        width:175px;
        height:175px;
        border-radius:50%;
        border:3px solid #27AE60;
        margin-bottom:20px;
    }

    h2{
        padding-top:20px;
        border-top:3px solid #27AE60;
    }

    .icons{
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
        gap:8px;

        a{
            display:flex;
            align-items:center;
            justify-content:center;

            width:48px;
            height:48px;

            color:inherit;

            border-radius:50%;
            transition:all .5s;

            img,svg{
                width:32px;
                height:32px;
            }

            &:hover{
                background-color:#27AE6055;
            }
        }
    }
`