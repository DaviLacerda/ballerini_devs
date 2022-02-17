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
    width:100%;
    height:80vh;

    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    gap:30px;

    position:relative;

    .swiper{
        width:100%;
        height:100%;
        min-width:240px;
        display:flex;
        align-items:center;
        justify-content:center;
        padding:8px;
    }

    .swiper-wrapper{
        height:500px;
    }

    .swiper-slide-active{
        width:100%;
        max-width:400px;
        height:500px;
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

export const DevInput = styled.div`
    width:220px;
    height:50px;

    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    gap:4px;

    background-color:#fff;
    border-radius:10px;
    padding:8px;
    margin: 5vh auto 0;

    svg{
        fill:#999999;
    }

    input[type="text"]{
        width:180px;
        height:40px;
        border-radius:10px;
        border:none;
        outline:none;
        font-family:'Maven Pro', sans-serif;
        font-size:1.1em;
    }

    @media(min-width:900px){
        margin:0;
        position:fixed;
        top:40px;
        right:3vw;
    }
`

export const LogOutButton = styled.button`
    width:100px;
    height:40px;
    background-color:#f42626;
    position:absolute;
    bottom:0;

    border:none;
    border-radius:10px;
    
    transition:all .5s;
    z-index:3;

    color:#fff;
    font-family:'Overpass',sans-serif;
    font-size:1.125em;

    &:hover{
        cursor:pointer;
        background-color:#f4262655;
    }

    &:active,&:focus{
        transform:scale(.9);
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
    box-shadow: -1px 7px 25px 1px rgba(0,0,0,0.65);
    border-radius:10px;
    transition:all .5s;

    @media(min-width:1200px){
        width:400px;
    }

    &:hover{
        transform:translateY(-20px);
        box-shadow: -1px 7px 25px 1px #27AE6055;
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