import style from "styled-components";

export const BannerWrapper = style.div`
h3{
    color:#000;
   font-family: "Lora", serif; 
   font-size: 1.3rem;
}
h3:hover{
    color:#FBB124;
}
a:hover{
    text-decoration:none;
}
.slick-arrow{
    background-color:#FBB124;
    width:30px;
    height:30px;
    border-radius:100%;
}
.slick-arrow:hover,
.slick-arrow:active,
.slick-arrow:focus{
    background-color:#FBB124;
}
`;
