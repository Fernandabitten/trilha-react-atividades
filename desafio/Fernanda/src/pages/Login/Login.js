import React from "react";
import Banner from "../../img/banner.png";
import LoginForm from "../../componentes/Form/LoginForm";
import "../../componentes/Cards/CardMovieDetails/cardMovieDetails.css";
import { LoginStayled, VerticalColumn, HorizontalColumn } from "./Login.styled";

function Login() {
  return (
    <LoginStayled style={{ backgroundImage: `url(${Banner})` }}>
      <VerticalColumn>
        <HorizontalColumn>
          <div style={{ marginTop: "4%", marginLeft: "3%" }}>
            <spam style={{ fontSize: "35px" }}>
              Assista a filmes em qualquer Lugar
            </spam>
            <LoginForm />
          </div>
        </HorizontalColumn>
      </VerticalColumn>
    </LoginStayled>
  );
}

export default Login;
