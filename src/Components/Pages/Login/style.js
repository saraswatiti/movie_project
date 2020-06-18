import style from "styled-components";
export const PopUpSection = style.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: rgba(0,0,0, 0.5);
    z-index:9;

    svg{
        color:#000;
        margin-bottom:30px;
        font-size: 25px;
        border-radius: 50%;
        border: 1px dotted;
        padding: 2px;
    }
    input{
        display:block;
        width:100%;
        margin-bottom:15px;
        height:41px;
        padding:15px;
    }
    h1{
        text-align:center;
        margin:0px auto 15px;
    }
    p{
        text-align:center;  
    }
    .signupbtn{
        font-weight:600;
        margin-left:5px;
    }
    input[type='checkbox']{
        height:auto;
        width:auto;
        display:inline-block;
        // margin-bottom:15px;
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
    .form-check{
        display:inline-block;
    }
`;
export const PopUpWrapper = style.div`
    position: absolute;
    left: 25%;
    right: 25%;
    top: 25%;
    // bottom: 25%;
    margin: auto;
    background: #fff;
    padding:30px;
`;
