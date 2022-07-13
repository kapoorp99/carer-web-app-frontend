import React from 'react'
import './styles'
import { FooterContainer, FooterContainerDown, FooterContainerTop } from './styles'

function Footer() {
    return (
        <FooterContainer>
            <FooterContainerTop>
                <h3>Aryan Gupta</h3>
                <span>aryanbsz4788@gmail.com</span>
            </FooterContainerTop>
            <FooterContainerDown>
                <span>&copy;</span>
                <span>2022</span>
            </FooterContainerDown>
        </FooterContainer>
    )
}

export default Footer
