import styled from "styled-components";


const Container = styled.main`
display: flex;
flex-direction: column;
align-items: center;
margin-top: calc(50vh - (295px / 2));

 header {
    width: 147px;
    height: 50px;
    margin-bottom: 24px;
    font-family: 'Saira Stencil One';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    color: #FFFFFF;
 }

 h1 {
     font-family: 'Saira Stencil One', cursive;
     margin-left: 113px;
    font-size: 32px;
     color: #FFFFFF;
     margin-bottom: 24px;
 }
 form {
     width: 326px;
     display: flex;
     flex-direction: column;
     align-items: center;
    
     * {
         width: 100%;
     }

     input {
         height: 58px;
         background: #FFFFFF;
         border: 1px solid #D5D5D5;
         border-radius: 5px;
         margin-bottom: 13px;
         padding-left: 15px;
     }
     input::placeholder {
        font-family: Raleway;
        color: black;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #000000;

     }
     button {
        height: 46px;
        background: #A328D6;
        border-radius: 5px;
        border: none;
        margin-bottom: 36px;
        font-weight: 700;
        color: #FFFFFF;
    }

     button:hover { 
        background: #8c11be;
     }
 }
 .link {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
    text-decoration: none;
 }
 `

export default Container;