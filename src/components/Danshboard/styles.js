import styled from 'styled-components'

export const Container = styled.div`

    max-width: 1080px;
    margin: 0 auto;

    margin-top: 2rem;

    form{
        input{
            width: 500px;
            height: 35px;
            padding:5px;
            outline: none;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
    }


`;

export const Content = styled.div`

    display: grid;
    grid-template-columns: repeat(4, 1fr) ;
    grid-gap: 1rem;
    margin-top:2rem

`