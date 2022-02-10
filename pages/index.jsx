import React from 'react';
import Link from 'next/link';
import logo from '../assets/logo2.png'
import logo2 from '../assets/lol.jpg'


import Logos from '../components/logos';
import Footer from '../components/Footer';
const index = () => {
    const array = [
        {
            name:'moloko',
            id:1,
            image:logo2
        },
        {
            name:'мясо',
            id:2,
            image:logo2
        },
        {
            name:'idi nuhui',
            id:3,
            image:logo2
        },
        {
            name:'wsef',
            id:4,
            image:logo2
        }
        ,
        {
            name:'wsefaw',
            id:4,
            image:logo2
        }
        ,
        {
            name:'wsefaw',
            id:4,
            image:logo2
        }
        ,
        {
            name:'wsefaw',
            id:4,
            image:logo2
        }
        ,
        {
            name:'wsefaw',
            id:4,
            image:logo2
        }
    ]

//    const handleClickPageProduct = (id) => {
//         <Link href={`/category/${id}`}>
//         </Link>
//     }
    return (
        <div>
            <Logos image={logo.src} />
            <h1 style={{
                fontSize:'35px',
                marginTop:'30px',
                textAlign: 'center',
                
            }}>Категории проду</h1>
           <div style={{
               display:'flex',
               flexWrap:'wrap',
               justifyContent:'space-between',
               width:'900px',
               margin:'0 auto'
           }}>
               {array.map((item)=>{
                   return(
                  <div style={{
                    marginLeft:'20px',
                    marginRight:'20px'
                 }}>
                     <div>
                        <Link href={`/category/${item.id}`}>
                        <img src={item.image.src} alt="ok"  style={{
                            width:'150px',
                            height:'300px'
                        }}/>
                        </Link>
                    </div>
                    <div>{item.name}</div>
                    <div>{item.id}</div>
                 </div>
                 )
                 })}
               </div>

           <Footer/>
        </div>
    );
};

export default index;