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
`

export const Card = styled.div`
    width:400px;
    height:400px;

    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    gap:8px;

    background-color:#F9F9F924;

    img{
        width:256px;
        height:256px;
        border-radius:50%;
        border:3px solid #27AE60;
    }

    .icons{
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
        gap:8px;

        a{
            width:100%;
            height:100%;
            color:inherit;
            text-decoration:none;
        
            svg, img{
                width:32px;
                height:32px;
                transition:all .5s;

                &:hover{
                    filter:brightness(0.8);
                }
            }
        }
    }
`