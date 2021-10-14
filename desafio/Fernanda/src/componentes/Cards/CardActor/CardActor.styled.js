import styled from "styled-components";

export const CardActorStyled = styled.div`
  width: 100%;
  img {
    margin-top: -50px;
  }
`;

export const ContainerImgStyled = styled(CardActorStyled)`
  position: relative;
  margin-top: 0;
`;

export const InfoActorStyled = styled(CardActorStyled)`
  margin: center;
  padding: -10px;
  display: flex;
`;
