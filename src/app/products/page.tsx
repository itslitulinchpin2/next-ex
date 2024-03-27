const products = ['shirt','pants','skirt','shoes']
import Link from 'next/link'
export default function ProductsPage(){
    return(
        <>
        <h1>This is ProductsPage..</h1>
        <ul>
            {products.map((product,index)=>(
            <li key={index}>
                <Link href={`/products/${product}`}>{product}</Link>
            </li>))}
        </ul>
        </>
        
    )
}