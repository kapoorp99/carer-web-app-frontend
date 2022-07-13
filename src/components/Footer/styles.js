import styled from 'styled-components'

export const FooterContainer = styled.div`
    width: 100%;
    background-color: var(--primary-color-dark);
    color: var(--primary-color-light);
`;

export const FooterContainerTop = styled.div`
    text-align: center;
`;

export const FooterContainerDown = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    > span {
        padding: 0.2rem;
    }
`;