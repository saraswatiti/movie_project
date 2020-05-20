import style from "styled-components";

export const BannerWrapper = style.div`
h1,h2,h3{
    color:#000;
   font-family: "Lora", serif; 
}
h2{
    font-size: 1.7rem;  
    font-weight:500;
}
h3{
    font-size:1.3rem;
}
h3:hover{
    color:#FBB124;
}
a:hover{
    text-decoration:none;
    transition:all 0.67s ease-in-out;
}
.slick-arrow{
    background-color:#FBB124;
    width:30px;
    height:30px;
    border-radius:100%;
    transition:all 0.67s ease-in-out;
}
.slick-arrow:hover,
.slick-arrow:active,
.slick-arrow:focus{
    background-color:#FBB124;
    transition:all 0.67s ease-in-out;
}
.figure{
    overflow:hidden;
    margin:0;
}
img:hover{
    transform: scale(1.1);
    transition:all 0.67s ease-in-out;
}
`;
