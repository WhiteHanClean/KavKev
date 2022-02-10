import Image from "next/image";
import React, { useState } from "react";
import cl from "./Autorization.module.scss";
import logo from "../../assets/logo2.png";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Autorization = () => {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  function handleValues(e) {
    let values = {
      ...state,
      [e.target.name]: e.target.value,
    };
    setState(values);
  }

  function check() {
    if (!state.username || !state.password) {
      alert("Заполните все  поля!");
      return;
    } else {
      console.log(state);
    }
  }

  return (
    <div className={cl.container}>
      <ArrowBackIosNewIcon className={cl.back} />
      <div className={cl.main}>
        <div className={cl.logo}>
          <Image src={logo} alt="logo" className={cl.logo} />
        </div>
        <h6 htmlFor="">
          С Возвращением!
          <br /> Введите номер телефона
        </h6>
        <TextField
          id="outlined-basic"
          label="Номер телефона"
          variant="outlined"
          sx={{ width: "100%" }}
          name="username"
          onChange={handleValues}
          type="number"
        />
        <h6 htmlFor="">Введите пароль</h6>
        <FormControl sx={{ width: "100%" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            onChange={handleValues}
            name="password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button
          variant="contained"
          className={cl.button}
          onClick={() => check()}
        >
          ВОЙТИ
        </Button>
        <p>Забыли пароль?</p>
      </div>
    </div>
  );
};

export default Autorization;
