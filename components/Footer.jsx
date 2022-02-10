import React from 'react';
import wa from '../assets/wa.png'
import ig from '../assets/ig.png'
import ha from '../assets/halal.png'
const Footer = () => {
    return (
        <div style={{
            height:'251px'
        }}>
            <hr style={{
                border:'1px solid black',
            }}/>

           <div style={{
               display:'flex',
               justifyContent:'space-around'
           }}>
           <div style={{
                marginTop:'50px',
                marginLeft:'40px',
                width:'200px',
                display:'flex',
                justifyContent:'space-between'
            }}>
                <img src={wa.src} alt="ok" style={{
                    width:'50px',
                    height:'50px'
                }}/>
                <img src={ig.src} alt="ok"style={{
                    width:'50px',
                    height:'50px'
                }} />
                <img src={ha.src} alt="ok" style={{
                    width:'50px',
                    height:'50px'
                }}/>
            </div>
            <div style={{
                marginTop:'50px'
            }}>
                <p>Контакты: +996 999 999 999</p>
                <p>Мы на рынке Кыргызстана с 1999г. Только натуральные продукты.
                 1999-2022</p>
                 <p>Выбор года №1 (Сэндвич года)</p>
            </div>
           </div>
        </div>
    );
};

export default Footer;