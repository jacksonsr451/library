import styled from 'styled-components'

const SearchStyled = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    margin: 1rem;
    padding: .5rem 1rem;
    justify-content: right;

    border-radius: .8rem;

    background-color: ${({theme}) => theme.colors.border};

    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: .1rem .5rem;
        font-size: 1.2rem;

        :hover {
            cursor: pointer;
        }
    }

    input {
        flex: 1;

        font-size: 1.2rem;
        font-weight: bold;

        color: ${({theme}) => theme.colors.primary};
    }
`

export default SearchStyled
