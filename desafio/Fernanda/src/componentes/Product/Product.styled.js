import styled from "styled-components";

export const ProductBox = styled.div`
width: 500px;  
height: 100%;  
border: 1px solid #3498db;
background-color: rgb(234, 236, 238);  
color: green;
border-radius: 6px;
padding: 10px 16px;
display: flex;
justify-content: space-between;
color: black;
`;

export const ColLeft = styled(ProductBox)`
width: 100%;
color: black;
`;
