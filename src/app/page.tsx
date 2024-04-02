import Image from "next/image";
import styles from "./page.module.css";
import {notFound} from 'next/navigation';
import Counter from '@/components/Counter';

import os from 'os';
export default function Home() {
  //notFound();
  console.log('server component!!');
  return (
  <>
   <h1>This is a HomePage. Version 2</h1>
   <Counter></Counter>
   <Image src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
   alt='random' width={400} height={400}></Image>
   </>
  );
}
