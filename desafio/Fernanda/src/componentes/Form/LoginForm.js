import React, { useContext } from "react";
import { MyContext } from "../../context/context";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import Logo from "../../img/logo.png";
import { Grid, Paper, Button } from "@material-ui/core";
import Input from "@material-ui/core/Input";

const Schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  senha: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const Login = () => {
  const paperStyle = {
    padding: 50,
    height: "68vh",
    width: 320,
    margin: "20px auto",
    backgroundColor: " transparent",
  };

  const { loginUser } = useContext(MyContext);

  const history = useHistory();
  const form = useFormik({
    initialValues: {
      email: "",
      senha: "",
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      loginUser(values);
      history.push("/list-movies");
    },
  });

  return (
    <Grid style={{ marginTop: "-5%" }}>
      <form action="" onSubmit={form.handleSubmit}>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <img src={Logo} alt={""} />
          </Grid>
          <Input
            id="email"
            value={form.values.email}
            onChange={form.handleChange}
            label="E-mail"
            placeholder="Enter e-mail"
            type="email"
            fullWidth
            required
            style={{
              width: "300px",
              marginLeft: "-10%",
              marginTop: "10%",
              borderBottom: " 1px solid white",
              color: "white",
              padding: "5px",
            }}
          />

          <Input
            id="senha"
            value={form.values.senha}
            onChange={form.handleChange}
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
            style={{
              width: "300px",
              marginLeft: "-10%",
              marginTop: "10%",
              borderBottom: " 1px solid white",
              color: "white",
              padding: "5px",
            }}
          />

          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={{
              backgroundColor: "#068DFF",
              fontSize: "15px",
              marginTop: "35px",
              width: "300px",
              marginLeft: "-10%",
              height: "50px",
            }}
            fullWidth
          >
            Entrar
          </Button>
        </Paper>
        <center>
          <spam style={{ color: "#494848", marginTop: "100%" }}>
            @2021 Fernanda Bittencourt <br />
            Dados e imagens pegos do site themoviedb.org
          </spam>
        </center>
      </form>
    </Grid>
  );
};

export default Login;
