import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import instance from '../../../api/config';
import { XCircle } from 'react-feather'
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { useNavigate } from 'react-router-dom'

function AddPost() {
    let navigate = useNavigate()
    let user = localStorage.getItem('carer_user')
    user = JSON.parse(user)
    const [success, setSuccess] = useState(null);
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(e)
        instance.post(`/posts/add_post`, {
            city: e.target.city.value.toLowerCase(),
            message: e.target.message.value,
            contact: e.target.contact.value,
            email: user.userDetails.email,
            name: user.userDetails.firstname + " " + user.userDetails.lastname
        })
            .then((response) => {
                setSuccess(response.data.message);
            }).catch((error) => {
                console.log(error);
                alert(error);
            })
    }
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
            <Container>
                <FormContainer>
                    {success ? (
                        <div className='success'>
                            <h3>{success}</h3>
                            <XCircle onClick={(e) => { setSuccess(null) }} />
                        </div>
                    ) : (<></>)}
                    <h1>Post your message</h1>
                    <form onSubmit={handleFormSubmit}>
                        <input
                            name='city'
                            type="text"
                            placeholder="City"
                            autoFocus={true}
                            required={true} />
                        <input
                            name='message'
                            type="text"
                            placeholder="Message"
                            required={true} />
                        <input
                            name='contact'
                            type="text"
                            placeholder="Contact"
                            required={true} />
                        <button type="submit" value="submit">
                            Submit
                        </button>
                    </form>
                </FormContainer>
            </Container>
            <Footer />
        </>
    )
}

export default AddPost

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const FormContainer = styled.div`
    border-radius: 5px;
    color: var(--primary-color-dark-text);
    margin: 2rem;
    padding: 2rem;
    width: 100%;

    > .success {
        padding: 1rem;
        text-align: center;
        border: 1px solid #82b74b;
        margin-bottom: 1rem;
        background-color: #b5e7a0;
        font-family: Georgia, 'Times New Roman', Times, serif;
        color: #000E14;
        display: flex;
        justify-content: space-between;
        >h3 {
            font-weight: 100;
        }
        >.MuiSvgIcon-root {
            border: 1px solid #000E14;
            border-radius: 1rem;
            cursor: pointer;
            color: #000E14;
        }
    }

    > h1 {
        text-align: center;
    }

    > form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        > .MuiTextField-root {
            margin: 1rem;
        }
        > button {
            align-self: center;
            margin: 2em;
            font-size: medium;
            background-color: var(--primary-color-dark);
            color: var(--secondary-color-light);
            font-weight: bolder;
            :hover {
                opacity: 0.8;
                background-color: var(--secondary-color-light);
                color: var(--primary-color-dark-text);
            }
        }
    }
`;
