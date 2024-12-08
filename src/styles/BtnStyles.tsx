import styled from "styled-components"

type StlBtnPropType = {
    bkGrCol?: string
    brStl?: string
    btnCol?: string
    brCol?: string
}

export const ButtonStl = styled.button<StlBtnPropType>`
cursor: pointer;
width: 86px;
height: 30px;
border-radius: 5px;
font-weight: bold;
background-color: ${props => props.bkGrCol};
border-style: ${props => props.brStl};
color: ${props => props.btnCol};
border-color: ${props => props.brCol};
&:hover {
    background-color: #3b4874;
    border-style: ${props => props.brStl};
    border-style: none;
    color: white
}
`
export const BtnCont = styled.div`
display: flex;
justify-content: row;
padding-left: 20px;
gap: 12px;
`