import styled from 'styled-components'
import { Link } from 'react-router-dom';


export const HeaderContainer = styled.div`
    top: 0;
    display: flex;
    width: 100%;
    background-color: var(--primary-color-dark);
    color: var(--primary-color-light);
    position: sticky;
`;

export const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 1rem;
`;

export const HeaderMiddle = styled.div`
    flex: 0.6;
    padding: 1rem;
    text-align: center;
    > h1 {
        letter-spacing: 0.2rem;
    }
`;

export const HeaderRight= styled.div`
    flex: 0.3;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 1rem;
`;

export const HeaderCoinsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    >h3{}
    >img {}
`;


export const StyledLink = styled(Link)`
    text-decoration: none;
    color: var(--primary-color-light);
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    > .MuiSvgIcon-root {
        font-size: 2rem;
        margin-right: 1rem;
        cursor: pointer;
        :hover {
            opacity: 0.8;
        }
    }
`;