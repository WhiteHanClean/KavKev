import React from "react";
import Menu from "@mui/material/Menu";
import Image from "next/image";
import { Badge, TextField } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import cl from "./CartModal.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import fo from "../../assets/halal.png";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const CartModal = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Badge badgeContent={4} color="success">
        <ShoppingCartIcon
          onClick={handleClick}
          style={{ fontSize: "50px", color: "red", cursor: "pointer" }}
        />
      </Badge>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div className={cl.head}>
          <h5>Количество товаров: 3</h5>
          <p>в вашей корзине</p>
        </div>

        <div className={cl.main_container}>
          <div className={cl.menu}>
            <Image src={fo} alt="smart" />
            <div className={cl.menu_inner}>
              <p>name</p>
              <p>model</p>
              <p>price</p>
              <div className={cl.foot}>
                <TextField
                  id="outlined-basic"
                  label="Количество"
                  variant="outlined"
                  type="number"
                />
                <Checkbox {...label} defaultChecked />
                <CloseIcon className={cl.del_icon} />
              </div>
            </div>
          </div>
        </div>
      </Menu>
    </div>
  );
};

export default CartModal;
