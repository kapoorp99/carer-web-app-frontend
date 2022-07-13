import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { ProfileCard, ProfileContainer } from './styles'

function Profile() {
    let navigate = useNavigate()
    let user = localStorage.getItem('carer_user')
    user = JSON.parse(user)
    useEffect(() => {
        let token = localStorage.carer_token
        if (!token) {
            navigate('/')
        }
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <Header />
            <ProfileContainer>
                <ProfileCard>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH4dcYWVFHFsz8M3Rsjpy2Hg6gQAmgbCIwWA&usqp=CAU'
                        alt='' />
                    <h1>{user.userDetails.firstname}</h1>
                    <h1>{user.userDetails.points}</h1>
                </ProfileCard>
            </ProfileContainer>
            <Footer />
        </>
    )
}

export default Profile