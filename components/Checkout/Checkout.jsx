import React, { useState } from "react";
import cl from "./Checkout.module.scss";
import logo from "../../assets/logo2.png";
import { Button, FormControl, TextField } from "@mui/material";
import Image from "next/image";
import axios from "axios";
function Checkout() {
  const [text, setText] = useState("");
  function setChangeText(e) {
    setText(e.target.value);
  }
  async function submit() {
    if (text.trim() === "") {
      console.log("error");
    } else {
        axios({
            method: "post",
            url: `http://kavkev.kg:8080/api/my_cart/create_order/`,
            headers: {
                Authorization: `Token ${localStorage.userToken}`,
            },
            data: {
                adress: data.adress,
                status: "В ожидании доставки",
            },
        })
            .then(function (response) {
                console.log(response);
                setOpen(true);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    }
  }
  return (
    <div className={cl.container}>
      <div className={cl.logo}>
        <Image src={logo} />
      </div>
      <div className={cl.form_container}>
        <p className={cl.pre__text}>
          Укажите адрес, по которому должна быть произведена доставка
        </p>
        <form>
          <TextField
            onChange={setChangeText}
            id="outlined-basic"
            label="Адрес"
            variant="outlined"
          />
          <Button onClick={submit}>Submit</Button>
          <p className={cl.next__text}>
            Оплата на метсе С вами свяжутся по номеру
          </p>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
