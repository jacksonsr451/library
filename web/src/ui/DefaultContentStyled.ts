import styled from 'styled-components'

const DefaultContentStyled = styled.div`
        flex: 1;
    display: flex;

    .aside {
        width: 320px;
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

        .search {
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
        }
    }
`

export default DefaultContentStyled