import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import { HomeContainer, HomeContainerLeft, HomeContainerRight, StyledLink } from './styles'

function Home() {
    let navigate = useNavigate()
    useEffect(() => {
        let token = localStorage.carer_token
        if(!token || token===undefined) {
            navigate('/')
        }
        // eslint-disable-next-line
    },[])
    return (
        <>
            <Header />
            <HomeContainer>
                <HomeContainerLeft>
                    <StyledLink to="/create_post">
                        <h2>Need help ?</h2>
                    </StyledLink>
                </HomeContainerLeft>
                <HomeContainerRight>
                    <StyledLink to="/search_post">
                        <h2>Want to help ?</h2>
                    </StyledLink>
                </HomeContainerRight>
            </HomeContainer>
            <Footer />
        </>
    )
}

export default Home
