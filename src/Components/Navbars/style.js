import style from "styled-components";

export const Navwrapper = style.div`
background-color:#FBB124;
font-family: "Lora", serif;
.search-section{
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

export const SearchGrids = style.div`

position: absolute;
top: 50px;
left:0;
z-index:9;
ul{
padding: 0;
background: #fff;
list-style: none;
box-shadow: 0 0 1px rgba(0,0,0,0.2); 
overflow-y: scroll;
height: 300px; 
}
figure{
    margin-right:15px;
}
img{
    width:150px;
}
li{
    display:flex;
    font-size:20px;
    align-items:center;
}
`;
