import React from 'react';
import { useRouter } from 'next/router';
import classes from './detail.module.scss';
import { useState } from 'react';
import logo2 from '../../assets/yaLox.png'
import logo from '../../assets/logo2.png';
import Logos from '../../components/logos';

const Product_detail = () => {

    const [productDetail, setProductDetail] = useState(
        {
            name:'moloko',
            id:1,
            image:logo2,
            description:'Состав: хлеб, колбаса, огурцы, майонез'
        }
    )


    return (
        <div className={classes.container}>
            <Logos image={logo.src} />
            <h1>Продукт детали</h1>
            <div className={classes.container_home}>
               <div className={classes.category_item}>
               
                    <div className={classes.category_title}>
                        <img className={classes.category_img} src={productDetail.image.src} alt="asd" />
                        <h3>{productDetail.name}</h3>
                        <p>{productDetail.description}</p>
                        <button onClick={()=>{
                                console.log(productDetail.id)
                                router.push(`/product_detail/product-detail`)
                        }} style={{
                            width:'50px',
                            height:'50px'
                        }}></button>
                    </div>)
                
               </div>
            </div> 
        </div>
    );
};

export default Product_detail;