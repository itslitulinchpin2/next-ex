import path from 'path';
import { promises as fs } from 'fs';

export type Product = {
    id:string;
    name:string;
    price:number;
    image:string;
}
export async function getProducts():Promise<Product[]>{
    const filePath = path.join(process.cwd(),'data','products.json');
    
    //비동기함수이므로 비동기 처리하자.
    const data = await fs.readFile(filePath,'utf-8');

    //JSON을 JS객체로 변환
    return JSON.parse(data);
}

export async function getProduct(id:string): Promise <Product|undefined>{
    const products = await getProducts();
    
    return products.find(item=>item.id===id)
    
}