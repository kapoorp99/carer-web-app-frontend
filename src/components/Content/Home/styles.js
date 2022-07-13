import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 70%;
    height: 80vh;
    padding: 2em;
    margin: auto;
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 1em;
        height: 390px;
        width: 100%;
    }
`;

export const HomeContainerLeft = styled.div`
    background-color: var(--primary-color-dark);
    opacity: 0.8;
    border-radius: 1rem;
    flex: 0.5;
    margin: 2em;
    width: 50%;
    @media (max-width: 768px) {
        width: 100%;
        margin: 1em;
    }
`;

export const HomeContainerRight = styled.div`
    background-color: var(--primary-color-dark);
    opacity: 0.8;
    border-radius: 1rem;
    flex: 0.5;
    margin: 2em;
    width: 50%;
    @media (max-width: 768px) {
        width: 100%;
        margin: 3em;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    > h2 {
        color: var(--primary-color-light);
        letter-spacing: 0.3rem;
        font-size: x-large;
        font-weight: 700;
        padding: 2em;
    }

    @media (max-width: 768px) {
        > h2 {
        color: var(--primary-color-light);
        letter-spacing: 0.1rem;
        font-size: x-large;
        font-weight: 700;
    }
    }
`;