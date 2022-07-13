import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

function SearchPost() {
    const navigate = useNavigate()
    const [city, setCity] = useState('')
    const [loading, setLoading] = useState(false);
    const handleFormSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        navigate({
            pathname: '/posts',
            search: `?city=${city.toLowerCase()}`
        })
    }
    useEffect(() => {
        let token = localStorage.carer_token
        if (!token) {
            navigate('/')
        }
        // eslint-disable-next-line
    },[])
    return (
        <Container>
            <FormContainer>
                <h1>Search needy people</h1>
                <form onSubmit={handleFormSubmit}>
                    <input
                        id="city"
                        type="text"
                        placeholder='city'
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        autoFocus={true}
                        required={true} />
                    <button
                        type="submit"
                        value="submit"
                    >
                        {loading ? ("Loading...") : ("Search")}
                    </button>
                </form>
                <div>
                    <h5>Want to register as a helper? <a href="/">Click Here</a></h5>
                </div>
            </FormContainer>
        </Container>
    )
}

export default SearchPost

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 3rem;
    padding-bottom: 4rem;
`;
const FormContainer = styled.div`
    border-radius: 5px;
    color: var(--primary-color-dark-text);
    margin: 2rem;
    padding: 2rem;
    width: 100%;

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

    > div {
        > h5 {
            font-weight: 700;
            > a {
                text-decoration: none;
                color: var(--primary-color-dark);
                font-size: 1rem;
            }
        }
    }
`;