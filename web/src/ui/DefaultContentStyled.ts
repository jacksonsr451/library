import styled from 'styled-components'

const DefaultContentStyled = styled.div`
    flex: 1;
    display: flex;

    .aside {
        width: 320px;
        height: fit-content;
        margin: .8rem;
        border-radius: .8rem;
        background-color: ${({theme}) => theme.colors.border};
        
        text-align: center;

        h1 {
            margin: .8rem;
        }

        .itens {
            flex: 1;
            display: flex;
            height: 32px;
            margin: .8rem;
            border-radius: .8rem;
            background-color: ${({theme}) => theme.colors.primary};

            align-items: center;
            justify-content: center;
            
            :hover {
                cursor: pointer;
            }
        }
    }

    .content {
        flex: 3;
    }
`

export default DefaultContentStyled