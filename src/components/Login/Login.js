import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import instance from '../../api/config';
import { LoginInnerContainer, MainContainer, SignupInnerContainer, SubContainer } from './styles'

function Login() {
    let navigate = useNavigate()
    const [disabled, setDisabled] = useState(false);
    const getProfile = (uid) => {
        instance.post(`/users/userprofile/${uid}`)
            .then((res) => {
                console.log(res.data)
                localStorage.setItem('carer_user', JSON.stringify(res.data))
                navigate('/home')
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const handleSignIn = (e) => {
        e.preventDefault();
        setDisabled(true);
        instance.post(`users/signin`, {
            "email": e.target.email.value,
            "password": e.target.password.value,
        })
            .then((res) => {
                localStorage.setItem('carer_token', res.data.token)
                let uid = res.data.id
                getProfile(uid)
            })
            .catch((err) => { console.log(err) })
    }
    const handleSignup = (e) => {
        e.preventDefault();
        setDisabled(true)
        console.log(e.target.firstname.value)
        instance.post('/users/signup', {
            "firstname": e.target.firstname.value,
            "lastname": e.target.lastname.value,
            "email": e.target.email.value,
            "password": e.target.password.value,
            "password2": e.target.password.value
        })
            .then((res) => { console.log(res.data) })
            .catch((err) => { console.log(err) })
    }
    useEffect(() => {
        let token = localStorage.carer_token
        if (token !== undefined) {
            navigate('/home')
        }
        // eslint-disable-next-line
    }, [])

    return (
        <MainContainer>
            <h1>Carer</h1>
            <SubContainer>
                <SignupInnerContainer>
                    <h1>Signup</h1>
                    <form onSubmit={handleSignup}>
                        <input name='firstname' type="text" placeholder='first name' />
                        <input name='lastname' type="text" placeholder='last name' />
                        <input name='email' type="email" placeholder='email' />
                        <input name='password' type="password" placeholder='password' />
                        <button type='submit' disabled={disabled}>Sign up</button>
                    </form>
                </SignupInnerContainer>
                <LoginInnerContainer>
                    <h1>Login</h1>
                    <form onSubmit={handleSignIn}>
                        <input name='email' type="email" placeholder='email' />
                        <input name='password' type="password" placeholder='password' />
                        <button type='submit' disabled={disabled} >Sign in</button>
                    </form>
                </LoginInnerContainer>
            </SubContainer>
        </MainContainer>
    )
}

export default Login
