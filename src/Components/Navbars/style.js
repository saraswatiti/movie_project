import style from "styled-components";

export const Navwrapper = style.div`
background-color:#FBB124;
font-family: "Lora", serif;
form{
    background-color:#fff;
    border-radius:100px;
    margin-left:40px;
    height:40px;
    padding: 0 20px;
    input{
        border:0;
    }
    input:focus{
        box-shadow:none;
    }
}
.navbar-light .navbar-nav .nav-link{
    color:#000;
}

`;
