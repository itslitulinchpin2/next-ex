
import { getProducts } from '@/service/products'
import Link from 'next/link'
export default async function ProductsPage(){
    //서버 파일에 있는 제품의 리스트를 읽어와서, 그걸 보여줌
    const products = await getProducts();

    return(
        <>
        <h1>This is ProductsPage..</h1>
        <ul>
            {products.map((product,index)=>(
            <li key={index}>
                <Link href={`/products/${product.id}`}>{product.name}</Link>
            </li>))}
        </ul>
        </>
        
    )
}