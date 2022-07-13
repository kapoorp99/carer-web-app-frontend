import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    text-align: center;
    background-color: var(--primary-color-light);
`

export const SubContainer = styled.div`
    display: flex;
    height: 100%;
`;
export const LoginContainer = styled.div`
    background-color: var(--primary-color-light);
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 2rem;
    font-size: xx-large;
`;
export const LoginInnerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    > h1 {
        font-size: xx-large;
        font-weight: 700;
        letter-spacing: 0.5rem;
        color: var(--primary-color-dark-heading);
    }

    > button {
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
`;

export const SignupContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`;
export const SignupInnerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    > h1 {
        font-size: xx-large;
        font-weight: 700;
        letter-spacing: 0.5rem;
        color: var(--primary-color-dark-heading);
    }

    > button {
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
`;
