import { useRouter } from 'next/router';
import logo2 from '../../assets/yaLox.png'
export default function(){
    const {query} = useRouter()
    console.log(query)

    const productCategory = [
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
    ]

    return(
        <div>
            Категории:
            {/* {query.name} */}


            <div>
                {productCategory.map((item)=>{
                    return(<div>
                        <img src={item.image.src} alt="asd" />
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                    </div>)
                })}

            </div> 
        </div>
    )
}