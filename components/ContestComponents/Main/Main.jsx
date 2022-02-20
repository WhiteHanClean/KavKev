import React from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import axios from 'axios'

import { Container } from "@mui/material";
import Increment from "./Increment/Increment";
import logo from "../../../assets/logo2.png";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

import classes from "./Main.module.scss";
import { ReqLink } from "../../ReqLink";
import Link from "@mui/material/Link";     



export default function () {
    const { query } = useRouter();
    const router = useRouter();

    if (typeof localStorage === "undefined") {
        null;
    } else {
        localStorage.setItem("token", query.token);
    }

    const { register, handleSubmit } = useForm({
        mode: "onBlur",
    });

    const sendToken = () => {
        axios({
            method: "put",
            url: `http://api-kavkev.kg:8080/api/token/${localStorage.token}/`,
            headers: {
                Authorization: `Token ${localStorage.userToken}`,
            },
            data: {},
        })
            .then((response) => {
                localStorage.setItem("isTook", response.status)
                router.push("/profile");
            })
            .catch((error) => {
                localStorage.setItem("isTook", error.response.status)
                router.push("/profile");
            });
    };

    const onSubmit = () => {
        // закинуть Токен в localstorage
        if (typeof localStorage.userToken !== "undefined") {
            sendToken();
        } else {
            router.push("/registration");
        }
    };

    return (
        <Container
            className={classes.MainContainer}
            container="main"
            maxWidth="xs"
        >
            <Typography
                component="h2"
                variant="h4"
                style={{ marginTop: "90px" }}
            >
                Поздравляем! Вы активировали QR код
            </Typography>
            <Increment />
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={classes.CuntForm}
            >
                <Typography
                    component="h5"
                    variant="h6"
                    style={{ color: "green", marginTop: "30px" }}
                >
                    ...{query.token}...
                </Typography>

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    type="submit"
                    className={classes.btn_primary}
                >
                    Забрать
                </Button>
            </form>
            <Typography component="h5" variant="h6" className={classes.reqlink}>
                <Link href="/requirements">Условия акции</Link>
            </Typography>
        </Container>
    );
}
