import React from 'react'
import styles from './Requirements.module.scss'
import { Container } from '@mui/material'
import Typography from "@material-ui/core/Typography";
import Link from '@mui/material/Link';
import insta from "../../../assets/ig.png";




const Requirements = () => {
    return(
        <Container style={{ maxWidth: "720px", marginTop: 140 }} className={styles.Cuntainer} >
            <Typography
                component="h5"
                variant="h5"
                style={{
                    marginTop: "30px",
                }}
            >
               Условия акции
            </Typography>
            <Typography
                component="h5"
                variant="h6"
                style={{
                    marginTop: "30px",
                }}
            >
               {"1) Покупаете сэндвич"}
            </Typography>
            <Typography
                component="h5"
                variant="h6"
                style={{
                    marginTop: "30px",
                }}
            >
                {"2) Стираете защитный слой с QR кода"}
            </Typography>
            <Typography
                component="h5"
                variant="h6"
                style={{
                    marginTop: "30px",
                }}
            >
                {"3) Сканируете"}
            </Typography>
            <Typography
                component="h5"
                variant="h6"
                style={{
                    marginTop: "30px",
                }}
            >
                {"4) Копите QR кода"}
            </Typography>
            <br />
            <Typography
                component="h5"
                variant="h6"
                style={{
                    marginTop: "30px",
                }}
            >
                Собравшие 10 кодов имеют возможность участвовать в розыгрыше набора сэндвичей (200 наборов по 5 штук)
            </Typography>
            <Typography
                component="h5"
                variant="h6"
                style={{
                    marginTop: "30px",
                }}
            >
                Собравшие 20 кодов имеют возможность участвовать в розыгрыше термоса (200 штук)
            </Typography>
            <Typography
                component="h5"
                variant="h6"
                style={{
                    marginTop: "30px",
                }}
            >
                Собравшие 30 кодов имеют возможность участвовать в розыгрыше мобильной станции яндекс (10 штук)
            </Typography>
            <Typography
                component="h5"
                variant="h6"
                style={{
                    marginTop: "30px",
                }}
            >
                Собравшие 40 кодов имеют возможность участвовать в розыгрыше велосипеда (5 штук)
            </Typography>
            <Typography
                component="h5"
                variant="h6"
                style={{
                    marginTop: "30px",
                }}
            >
                Собравшие 50 кодов имеют возможность участвовать в розыгрыше телефона Xiaomi Redmi 10 (5 штук)
            </Typography>
            <Typography
                component="h5"
                variant="h6"
                style={{
                    marginTop: "30px",
                }}
            >
                Собравшие 60 кодов имеют возможность участвовать в розыгрыше игровой приставки PS4 Slim (3 штуки)
            </Typography>
            <Typography
                component="h5"
                variant="h6"
                style={{
                    marginTop: "30px",
                }}
            >
                Собравшие 80 кодов имеют возможность участвовать в розыгрыше электрического самоката Xiaomi Mi Electric Scater(3 штуки)
            </Typography>
            <Typography
                component="h5"
                variant="h6"
                style={{
                    marginTop: "30px",
                }}
            >
                Собравшие 80 кодов имеют возможность участвовать в розыгрыше электрического самоката Xiaomi Mi Electric Scater(3 штуки)
            </Typography>
            <Typography
                component="h5"
                variant="h5"
                style={{
                    marginTop: "30px",
                }}
            >
               Розыгрыш будет проходить 31 марта 2022 года в прямом Эфире на нашей странице в инстаграм!
            </Typography>
            <Typography
                component="h5"
                variant="h5"
                style={{
                    marginTop: "30px",
                }}
            >       
                
                 <Link href="https://www.instagram.com/kav_kev.kg/">  <img src={insta.src} alt="instagram logo" style={{width: "30px"}}/> Instagram</Link>
                 Подписывайтесь!
            </Typography>{" "}
            <Typography
                component="h5"
                variant="h5"
                style={{
                    marginTop: "30px",
                }}
            >
                *Сотрудники компании Кав Кев не имеют право принимать участие в данном конкурсе. *В розыгрыше могут участвовать лица достигшие 18 лет
            </Typography>
        </Container>
    )
}

export default Requirements