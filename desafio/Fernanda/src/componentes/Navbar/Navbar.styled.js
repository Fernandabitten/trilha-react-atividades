import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: #1b252f;
  color: white;
  font-family: Helvetica;
  font-weight: 300;
  color: white;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;  
  z-index: 1;  
`;

export const NavItemLeft = styled(Nav)`
  display: flex;
  position: relative;
    img {
      margin-left: 2%;      
    }
`;

export const NavItemRight = styled(Nav)`
  display: flex;
  margin-left: 50%;
  position: relative;

`;

export const NavItem = styled(Nav)`
  padding: 16px 16px;
  cursor: pointer;
  vertical-align: middle;
  text-decoration: none;
  position: relative;
  spam {
    margin-left: -49%;
    margin-top: 10%;
    text-decoration: none;
    font-size: 18px;
    color: orange;
  }
  :hover {
    //border-top: 1px solid white;
   border-bottom: 1px solid white; 

  }
`;
