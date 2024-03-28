import { getProduct, getProducts } from '@/service/products';
import { notFound } from 'next/navigation';

type Props = {
    params:{
        slug:string;
    }
}

export function gernerateMetadata({params}:Props){
    return {
        title:`product name:${params.slug}`
    }
}

export default async function ProductPage({params:{slug}}:Props){
    //서버 파일에 있는 데이터 중 해당 제품의 정보를 찾아 그걸 보여줌
    const product = await getProduct(slug);

    if(!product){
        notFound();
    }
    return(
        <h1>This is Products/{product.name} Page..</h1>
    )
}

export async function generateStaticParams(){
    //모든 제품의 페이지들을 미리 만들어 둘 수 있도록 하자(SSG)
    const products = await getProducts();
    return products.map(product=>({
        slug:product.id
    }))
}