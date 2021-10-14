import React from "react";
import Navbar from "../Navbar/NavBar";

export default function Layout({ children, titulo }) {
  return (
    <div>
      <Navbar />
      {children}
      {/*<center>
      <footer style={{ bottom: "0", left: "0", width:"100%", height:"100px", position:"absolute", marginTop:"0"}}>
            @ Fernanda Bittencourt <br />
            Dados pegos do site themoviedb.org 
      </footer>
      </center>*/}
    </div>
  );
}
