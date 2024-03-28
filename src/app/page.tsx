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
   <h1>This is a HomePage.</h1>
   <Counter></Counter>
   </>
  );
}
