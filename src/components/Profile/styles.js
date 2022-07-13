import styled from "styled-components";

export const ProfileContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ProfileCard = styled.div`
    width: 400px;
    height: 400px;
    background-color: var(--primary-color-dark);
    color: var(--primary-color-light);
    padding: 1rem;
    text-align: center;
    >h1 {
        margin-top: 1rem;
    }
    >img {
        display: block;
        margin: auto;
    }
`