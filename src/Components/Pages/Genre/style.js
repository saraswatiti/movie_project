import style from "styled-components";

export const GenerWrapper = style.div`
    ul{
        list-style:none;
    }
    li{
        display:inline-block;
    }
    li a{
        padding:3px 15px;
        background:#FBB124;
        color:#000;
        border:1px solid #FBB124;
        border-radius:25px;
        margin:5px;
        display:inline-block;
        text-decoration:none;
    }
`;
