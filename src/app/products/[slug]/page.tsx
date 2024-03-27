import { notFound } from 'next/navigation';

type Props = {
    params:{
        slug:string;
    }
}

// export function gernerateMetadata({params}:Props){
//     return {
//         title:`product name:${params.slug}`
//     }
// }

export default function PantsPage({params}:Props){
    if(params.slug==='nothing'){
        notFound();
    }
    return(
        <h1>This is Products/{params.slug} Page..</h1>
    )
}

export function generateStaticParams(){
    const products = ['pants','skirt'];
    return products.map(product=>({
        slug:product
    }))
}