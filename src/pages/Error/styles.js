import styled from 'styled-components';

export const ErrorContainer = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:row;
    gap:16px;

    .back{
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
        gap:16px;
        padding-left:16px;
        border-left:2px solid white;

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
        }
    }
`