import styled, { css } from 'styled-components';

export const StyledHeader = styled.header`
    width:100%;
    height:120px;

    display:flex;
    align-items:center;
    justify-content:space-around;
    flex-wrap:wrap;

    a{
        color:inherit;
        text-decoration:none;
    }
`

export const FlexRow = styled.div`
    display:flex;
    flex-direction:row;

    ${(props => props.icons && css`
        gap:12px;

        @media(min-width:600px){
            position:absolute;
            left:5vw;
        }

        a{
            display:flex;
            align-items:center;
            justify-content:center;

            width:48px;
            height:48px;

            border-radius:50%;
            transition:all .5s;

            img{
                width:32px;
                height:32px;
            }

            &:hover{
                background-color:#27AE6055;
            }
        }
    `)}

    ${(props) => props.logo && css`
        align-items:center;
        justify-content:center;
        gap:10px;
    `}
`