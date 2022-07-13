import React, { useEffect, useState } from 'react'
import { Home, LogOut, User } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import instance from '../../api/config';
import './styles'
import { HeaderCoinsContainer, HeaderContainer, HeaderLeft, HeaderMiddle, HeaderRight, StyledLink } from './styles';

function Header() {
    let user = localStorage.getItem('carer_user');
    user = JSON.parse(user)
    let navigate = useNavigate()
    const [coins, setCoins] = useState(0)
    const handleSignOut = () => {
        instance.get(`users/signout`)
            .then((res) => {
                navigate('/')
                localStorage.clear()
            })
            .catch((err) => { })
    }
    const handleProfile = () => {
        navigate('/profile')
    }
    useEffect(() => {
        instance.post(`/users/getcoins/${user.userDetails.id}`)
            .then((res) => {
                setCoins(parseInt(res.data.points))
            })
            .catch((err) => {
                console.log(err)
            })
            // eslint-disable-next-line
    }, [])
    return (
        <HeaderContainer>
            <HeaderLeft>
                <User onClick={handleProfile} />
            </HeaderLeft>
            <HeaderMiddle>
                <h1>Carer</h1>
            </HeaderMiddle>
            <HeaderRight>
                <HeaderCoinsContainer>
                    <h3>{coins}</h3>
                    <img src='https://ik.imagekit.io/q8qsfnr9wag/binance_1UKHVhz9S.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657690043599'
                        alt='' height='48' />
                </HeaderCoinsContainer>
                <StyledLink to="/" >
                    <Home />
                </StyledLink>
                <StyledLink to="/">
                    <LogOut onClick={handleSignOut} />
                </StyledLink>
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header

