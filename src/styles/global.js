import {createGlobalStyle} from 'styled-components'

export const GlobalStyled = createGlobalStyle`

    :root{
        --green: #01973A;
        --cinza: #4F5C71;
        --background: #F7F7F7;
        --orange: #FA7B5D;
    }


    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body, button, input{
        font-family: 'Roboto', sans-serif;
    }

    button{
        cursor: pointer;
    }
    body{
        background: var(--background);
        color: #000;
    }


`;