import styled from 'styled-components'

type ListBooksStyledProps = {
    visible: boolean
}

const ListBooksStyled = styled.div<ListBooksStyledProps>`
    flex: 1;

    display: ${({visible}) => visible ? 'flex' : 'none'};

    table {
        flex: 1;

        background-color: ${({theme}) => theme.colors.background};

        font-weight: bold;

        margin-right: 1rem;

        thead {
            background-color: ${({theme}) => theme.colors.primary};
            
            tr {

                .isbn,
                .title,
                .author,
                .company,
                .descriotion {
                    padding: .5rem 1rem;
                }

                .isbn {
                    width: 190px;
                }
                .title {
                    width: 120px;
                }
                .author {
                    width: 130px;
                }
                .company {
                    width: 130px;
                }
                .descriotion {
                    width: auto;
                }
            }
        }

        tbody {
            background-color: ${({theme}) => theme.colors.background};

            tr {
                .isbn,
                .title,
                .author,
                .company,
                .descriotion {
                    padding: 0 1rem;
                    margin: .5rem 0;
                }

                :hover {
                    cursor: pointer;
                }
            }
        }
    }
`

export default ListBooksStyled
