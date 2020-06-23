import style from "styled-components";
export const FormWrap = style.div`
    width:75%;
    margin:50px auto;
    padding:30px;
    font-family: "Lora", serif;
    box-shadow:0 0 10px rgba(0,0,0,0.2);
    h1{
        margin:0 auto 15px;
        text-align:center;
    }
    input{
        display:block;
        width:100%;
        margin-bottom:15px;
        height:41px;
        padding:15px;
    }
    input[type='submit']{
        width:auto;
        height: auto;
        padding: 5px 15px;
        border-radius: 50px;
        display: inline-block;
        margin-right: 15px;
    }
    input:focus{
        outline:0;
        box-shadow:none;
    }
`;
