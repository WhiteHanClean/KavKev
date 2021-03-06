import React, { useEffect } from "react";
import { Container } from "@mui/material";
import axios from "axios";
import { getProfile } from "../../../redux/products/profile.slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import qr_img from "../../../assets/qr-img.png";
import Link from "@mui/material/Link";
import storeIcon from "../../../assets/store.png";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    EffectCoverflow,
    Pagination,
    Navigation,
    FreeMode,
} from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import classes from "./Profile.module.scss";

const style = {
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
};

function Profile() {
    SwiperCore.use([Pagination, Navigation]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProfile());
    }, [dispatch]);

    const profile = useSelector((state) => state.profile.lol.profile);
    const contests = useSelector((state) => state.profile.lol.contests);
    const tokens = useSelector((state) => state.profile.lol.tokens);

    

    const handleClose = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("isTook");
        setOpen(false);
    };
    if(typeof localStorage !== "undefined"){
        
    }
    const isToken = () => {
        if(typeof localStorage !== "undefined"){
            if (typeof localStorage.token !== "undefined") {
                console.log("return true");
                return true;
            } else {
                console.log("return false");
                return false;
            }
        }
        
    };
    const isTookView = () => {
        if (typeof localStorage !== "undefined") {
            if (localStorage.isTook == 404) {
                return (
                    <Typography component="h5" variant="h5">
                        ?????? ?????? ???????????????????????? ??????????
                    </Typography>
                );
            } else if (localStorage.isTook == 400) {
                return (
                    <Typography component="h5" variant="h5">
                        ???????????? ?????????????????????????? ?????????? 3 ?????????? ?? ????????
                    </Typography>
                );
            } else if(localStorage.isTook == 200){
                return (
                    <Typography component="h5" variant="h5">
                        ?????? ???????????????????????? ??????????????
                    </Typography>
                );
            } else{

            }
        }
    };

    const constestsList = contests?.map((obj) => {
        return (
            <SwiperSlide className={classes.swiperSlide}>
                <Typography
                    component="h6"
                    variant="h6"
                    styles={{ marginTop: "6px" }}
                >
                    ???????????? {obj.need_qr}
                </Typography>
                <Typography component="h5" variant="h5">
                    {obj.name_contest}
                </Typography>
                <div
                    style={{
                        backgroundImage: "url(obj.image)",
                    }}
                >
                    <img
                        src={obj.image}
                        style={{ width: "100%", display: "block" }}
                        alt="contest_image"
                    />
                </div>
            </SwiperSlide>
        );
    });

    const listItems = tokens?.map((number) => {
        return (
            <Typography
                component="p"
                variant="h6"
                style={{ color: "green", fontSize: "14px" }}
            >
                {number.token}
            </Typography>
        );
    });

    const [open, setOpen] = React.useState(isToken);

    return (
        <Container className={classes.Container}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
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
                        {isTookView()}
                        <img
                            src={qr_img.src}
                            style={{ width: "70px", height: "70px" }}
                            alt="QR"
                        />
                    </div>
                    <Button
                        onClick={(close) => handleClose()}
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
                </Box>
            </Modal>
            <Typography component="h5" variant="h5" style={{
                marginTop: "30px"
            }}>
                ?????????? ???????????????????? ???? ???????????????? ??????????????,
            </Typography>
            <Typography component="h5" variant="h5">
                {profile?.first_name} {profile?.last_name}
            </Typography>
            <div className={classes.SmallInfo}>
                <p>???????????????????????????????? ??????????</p>
                <p>???????????????????????????? ???? ??????????????:</p>
                {profile?.qr_in_day}
                <br/>
                <br/>
                <p>??????????:</p>
                {profile?.qr_quantity}
            </div>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                className="mySwiper"
                className={classes.swiper}
                modules={[EffectCoverflow]}
                effect="coverflow"
            >
                {constestsList}
            </Swiper>

            <Typography component="h5" variant="h6">
                ?????? ???????? ????????
                <br />
                <br />
                {listItems}
            </Typography>
            <Link href="/" style={{ margin: "70px 0 0 0" }}>
                <Typography
                    component="h5"
                    variant="h6"
                    className={classes.shop}
                >
                    ?????????????? ?? ??????????????
                    <br />
                    <img
                        src={storeIcon.src}
                        alt="shop icon"
                        style={{ width: 60 }}
                    />
                </Typography>
            </Link>
            <Typography
                component="h5"
                variant="h6"
                style={{ margin: "70px 0 0 0" }}
            >
                {profile?.username}
            </Typography>
            <Typography
                component="h5"
                variant="h6"
                style={{ margin: "70px 0 70px 0" }}
            >
                <Link href="/requirements">?????????????? ??????????</Link>
            </Typography>
        </Container>
    );
}

export default Profile;
