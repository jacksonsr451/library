import styled from 'styled-components'

type BookStyledProps = {
    visible: boolean
} 

const BookStyled = styled.div<BookStyledProps>`
    flex: 1;

    display: ${({visible}) => visible ? 'none' : 'flex'};

    flex-direction: column;

    .fields {
        flex: 1;

        color: ${({theme}) => theme.colors.primary};

        font-size: 1.2rem;
        font-weight: bold;

        .row {
            flex: 1;
            display: flex;

            .field {
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;

                padding: .5rem 1rem;
                margin: .5rem 1rem;

                background-color: ${({theme}) => theme.colors.border};

                border-radius: .8rem;

                input {
                    width: 100%;
                    margin-left: .5rem;

                    font-size: 1.2rem;
                    font-weight: bold;
                }
            }
        }

        .field {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;

            padding: .5rem 1rem;
            margin: .5rem 1rem;

            background-color: ${({theme}) => theme.colors.border};

            border-radius: .8rem;

            input {
                width: 100%;
                margin-left: .5rem;

                font-size: 1.2rem;
                font-weight: bold;
            }
        }
    }

    .buttons {
        flex: 1;
        display: flex;

        button {
            width: 120px;
            margin: 1rem;
            padding: 1rem;

            border: none;
            border-radius: .8rem;

            font-size: 1.2rem;
            font-weight: bold;

            color: ${({theme}) => theme.colors.primary};

            :hover {
                cursor: pointer;
            }
        }
    }
`

export default BookStyled
