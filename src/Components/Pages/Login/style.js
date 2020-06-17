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
    }
    input{
        display:block;
        width:100%;
        margin-bottom:15px;
        height:41px;
        padding:15px;
    }
`;
export const PopUpWrapper = style.div`
    position: absolute;
    left: 25%;
    right: 25%;
    top: 25%;
    bottom: 25%;
    margin: auto;
    background: #fff;
    padding:15px;
`;
