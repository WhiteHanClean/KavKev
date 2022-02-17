import { useRouter } from 'next/router';
import logo2 from '../../assets/yaLox.png'
import logo from '../../assets/logo2.png';
import Logos from '../../components/Logos';
import classes from './category.module.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Category(){


    const router = useRouter()

    const [productCategory, setProductCategory] = useState([
        {
            name:'moloko',
            id:1,
            image:logo2,
            description:'Состав: хлеб, колбаса, огурцы, майонез'
        },
        {
            name:'мясо',
            id:2,
            image:logo2,
            description:'Состав: хлеб, колбаса, огурцы, майонез'
        },
        {
            name:'idi nuhui',
            id:3,
            image:logo2,
            description:'Состав: хлеб, колбаса, огурцы, майонез'
        },
        {
            name:'wsef',
            id:4,
            image:logo2,
            description:'Состав: хлеб, колбаса, огурцы, майонез'
        }
        ,
        {
            name:'wsefaw',
            id:4,
            image:logo2,
            description:'Состав: хлеб, колбаса, огурцы, майонез'
        }
        ,
        {
            name:'wsefaw',
            id:4,
            image:logo2,
            description:'Состав: хлеб, колбаса, огурцы, майонез'
        }
        ,
        {
            name:'wsefaw',
            id:4,
            image:logo2,
            description:'Состав: хлеб, колбаса, огурцы, майонез'
        }
        ,
        {
            name:'wsefaw',
            id:4,
            image:logo2,
            description:'Состав: хлеб, колбаса, огурцы, майонез'
        }
    ])


    // const handleClickPageProduct = (id) => {
    //     console.log(id)
    //     return (
    //         <Link href={`/product_detail/${productCategory.id}`}>
    //     </Link>
    //     )
    // }
    return(
        <div className={classes.container}>
            <Logos image={logo.src} />
            <h1>Категории:</h1>
            <div className={classes.container_home}>
               <div className={classes.category_item}>
               {productCategory.map((item)=>{
                    return(
                    <div className={classes.category_title}>
                        <img className={classes.category_img} src={item.image.src} alt="asd" />
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <button onClick={()=>{
                                console.log(item.id)
                                router.push(`/product_detail/product-detail`)
                            
                        }} style={{
                            width:'50px',
                            height:'50px'
                        }}></button>
                    </div>)
                })}
 
               </div>
            </div> 
        </div>
    )
}