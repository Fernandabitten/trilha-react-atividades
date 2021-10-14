import styled from "styled-components";

export const AccordionStyled = styled.div`
  width: 100%;
  border-radius: 5px;
  box-sizing: border-box;
  margin: 10px auto;
  //box-shadow: 0 1.5em 85px 0 rgba(0, 0, 0.2);
`;

export const Button = styled(AccordionStyled)`
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  border: none;
  text-align: left;
  outline: none;
  font-size: 20px;
  transition: 0.4s;
  width: 80%; 
  b{
    color: red;
  } 
`;

export const AccordionBoxItems = styled(AccordionStyled)`
  width: 80%;
  height: 100%;
  border: 1px solid #3498db;
  background-color: white;
  color: green;
  border-radius: 6px;
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
`;

export const AccordionPainel = styled(AccordionStyled)`
  display: flex;
  flex-direction: column;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.1s ease-out;
  display: block;
  width: 100%;
`;

export const AcordionItem = styled(AccordionStyled)`
display:flex;

  color: black;
  margin-left: 5%;
`;

export const ImgStyled = styled(AccordionStyled)`
display: inline-block;
  width: 6%;
  float: left;
`;

export const InfoItemStyled = styled(AccordionStyled)`
display: inline-block;
  float: left;
  padding: 0 0.8rem;
  lineheight: 2rem;
  width: 100%;
`;
