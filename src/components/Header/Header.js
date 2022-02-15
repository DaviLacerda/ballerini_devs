import { StyledHeader, FlexRow } from "./styles";

import linkedin from '../../assets/icons/linkedin.svg'
import facebook from '../../assets/icons/facebook.svg'
import discord from '../../assets/icons/discord.svg'
import logo from '../../assets/logo.svg'

export function Header(){
    return (
        <StyledHeader>
            <FlexRow icons>
                <a href="#"><img src={linkedin} alt="Linkedin" /></a>
                <a href="#"><img src={facebook} alt="Facebook" /></a>
                <a href="#"><img src={discord} alt="Discord" /></a>
            </FlexRow>
            <FlexRow logo>
                <img src={logo} alt="Ballerini Devs" />
                <h2>Ballerini Devs</h2>
            </FlexRow>
        </StyledHeader>
    )
}