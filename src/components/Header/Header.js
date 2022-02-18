import { StyledHeader, FlexRow } from "./styles";

import linkedin from '../../assets/icons/linkedin.svg'
import facebook from '../../assets/icons/facebook.svg'
import discord from '../../assets/icons/discord.svg'
import logo from '../../assets/logo.svg'

const linkedinLink = "https://www.linkedin.com/company/comunidadeballerini/"
const facebookLink = "https://www.facebook.com/rafaella.balleriniribeirogomes"
const discordLink = "https://discord.gg/ballerini"

export function Header(){
    return (
        <StyledHeader>
            <FlexRow icons>
                <a href={linkedinLink} target="_blank" rel="noreferrer"><img src={linkedin} alt="Linkedin" /></a>
                <a href={facebookLink} target="_blank" rel="noreferrer"><img src={facebook} alt="Facebook" /></a>
                <a href={discordLink} target="_blank" rel="noreferrer"><img src={discord} alt="Discord" /></a>
            </FlexRow>
            <a href="/">
                <FlexRow logo>
                    <img src={logo} alt="Ballerini Devs" />
                    <h2>Ballerini Devs</h2>
                </FlexRow>
            </a>
        </StyledHeader>
    )
}