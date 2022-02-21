import React, { useState } from "react";
import cl from "./Checkout.module.scss";
import logo from "../../assets/logo2.png";
import modalImg from "../../assets/modalBusket.png";
import { Button, Modal, TextField, Typography } from "@mui/material";
import Image from "next/image";
import axios from "axios";
import { Box } from "@mui/system";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/forCart/cartSlice";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: "600px",
  bgcolor: "white",
  display: "flex",
  flexDirection: "column",
  boxShadow: 24,
  paddingTop: 4,
  fontSize: "24px",
};

function Checkout() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [text, setText] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => (
    setOpen(false),
    dispatch(clearCart())
    );
  function setChangeText(e) {
    setText(e.target.value);
  }

  async function submit() {
    if (text.trim() === "") {
      console.log("error");
    } else {
      handleOpen();
      axios({
        method: "post",
        url: `http://kavkev.kg:8080/api/my_cart/create_order/`,
        headers: {
          Authorization: `Token ${window.localStorage.getItem("userToken")}`,
        },
        data: {
          adress: text,
          status: "В ожидании доставки",
        },
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  return (
    <div className={cl.container}>
      <div className={cl.logo}>
        <Image src={logo} alt={"loog"} />
      </div>
      <div className={cl.content}>
        <Typography
          component="h5"
          variant="h5"
          style={{
            marginBottom: 40,
          }}
        >
          Укажите адрес, по которому должна быть произведена доставка
        </Typography>
        <TextField
          label="Адрес"
          id="outlined-basic"
          sx={{ width: "90%", marginBottom: "40px" }}
          autoComplete="off"
          onChange={setChangeText}
        />
        <Typography component="h5" variant="h5">
          Оплата на мeсте
        </Typography>
        <Typography component="h5" variant="h5">
          С вами свяжутся по номеру
        </Typography>
      </div>
      <button onClick={submit}>Оформить</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              width: "80%",
              padding: "0 0px 0 30px",
            }}
          >
            <span style={{ fontSize: "24px", lineHeight: 1.2 }}>
              Ваш заказ принят и поступил в обработку!
            </span>
            <Image
              src={modalImg}
              style={{ width: "70px", height: "70px" }}
              alt="QR"
            />
          </div>
          <Link href="/">
            <Button
              onClick={handleClose}
              variant="contained"
              style={{
                backgroundImage:
                  "linear-gradient(93.26deg, #4E53FF 9.35%, #2B23BD 88.89%%)",
                width: "100%",
                display: "block",
                marginTop: "30px",
                height: "70px",
              }}
            >
              <Typography component="h4" variant="h4">
                OK
              </Typography>
            </Button>
          </Link>
        </Box>
      </Modal>
    </div>
  );
}
export default Checkout;
