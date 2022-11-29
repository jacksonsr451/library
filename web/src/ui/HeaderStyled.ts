import styled from 'styled-components'

const HeaderStyled = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    height: 5rem;
    background-color: ${({theme}) => theme.colors.border};
    align-items: center;

    .itens {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 12rem;
        height: 4rem;
        margin: .5rem 1rem;
        
        border-radius: .8rem;
        background-color: ${({theme}) => theme.colors.primary};

        font-weight: bold;
        :hover {
            cursor: pointer;
        }
    }
`

export default HeaderStyled
