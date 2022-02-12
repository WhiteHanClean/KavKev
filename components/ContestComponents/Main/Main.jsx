import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios'
import { useForm } from "react-hook-form";
import Link from '@mui/material/Link';
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

import MainContainer from "../MainContainer";
import Form from "../Form";
import Increment from "./Increment/Increment"
import logo from '../../../assets/logo2.png'

import classes from './Main.module.scss'



export default function(token){
    const {query} = useRouter()
    const router = useRouter()

    if (typeof localStorage === 'undefined') {
        null
    } else {
        localStorage.setItem("token", query.token)
    }
    

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
                console.log(response.status);
                router.push("/profile")
            })
            .catch((error) =>{
                console.log(error)
            });
    };

    const { handleSubmit } = useForm({
        mode: "onBlur",
    });
    const onSubmit = () => {
        // закинуть Токен в localstorage
        if (typeof localStorage.userToken !== "undefined") {            
            sendToken();           
        } else {
           router.push("/registration")
        }
    };

    
    return (
        
        
        <MainContainer className={classes.MainContainer}>
            <img src={logo.src} alt="kavkevlogo" className={classes.ContImage}/>
        <Typography component="h2" variant="h4" classes={{fontSize: "12px"}}> 
            Поздравляем! Вы активировали QR код
        </Typography>
        <Increment/>
        <Form onSubmit={handleSubmit(onSubmit)} className={classes.CuntForm} >
            <Typography
                component="h5"
                variant="h6"
                style={{ color: "green", marginTop: "30px" }}
            >
                ...{query.token}...
            </Typography>

            <Button type="submit" fullWidth variant="contained"type="submit" className={classes.btn_primary}>Забрать</Button>
        </Form>
        <Typography component="h5" variant="h6"> 
            <Link href="/requirements">Условия акции</Link>
        </Typography>
    </MainContainer>

    );
};


