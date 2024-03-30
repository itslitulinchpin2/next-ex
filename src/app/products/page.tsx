
import { getProducts } from '@/service/products'
import Link from 'next/link'
import styles from './page.module.css'
import MeowArticle from '@/components/MeowArticle';
import Image from 'next/image';
import myImage from '../../../public/photo-1441986300917-64674bd600d8.jpeg'
export const revalidate = 3;

export default async function ProductsPage(){
    //서버 파일에 있는 제품의 리스트를 읽어와서, 그걸 보여줌
    const products = await getProducts();
    // const res = await fetch('https://meowfacts.herokuapp.com',{
    //     next:{revalidate:3}
    // })
    // const data = await res.json();
    // const factText = data.data[0]
    return(
        <>
        <h1>This is ProductsPage..</h1>
        <Image src={myImage} alt='myImage'></Image>
        <ul>
            {products.map((product,index)=>(
            <li key={index}>
                <Link href={`/products/${product.id}`}>{product.name}</Link>
            </li>))}
        </ul>
       <MeowArticle/>
        </>
        
    )
}