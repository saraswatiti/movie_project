import style from "styled-components";

export const SinglepageWrap = style.div`
font-family: "Lora", serif;
h2{
    font-size:40px;
    font-weight:700;
}
span{
    background:#FBB124;
    color:#000;
}
ul{
    list-style:none;
    margin:0;
    padding:0;
}
ul li{
    display:inline-block;
    margin-right:10px;
    font-size:16px;
}
ul li svg{
    font-size:25px;
    margin-right:5px;
}
`;
export const Release = style.div`
    background:green;
    display: inline-block;
    padding: 0px 15px;
    color: #fff;
`;
