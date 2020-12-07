import Link from 'next/link'
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import Header from 'src/components/Header'

export const getServerSideProps = async (context: any) => {
  return {
    props: {
      ...context.query
    }
  }
}

export default function Home() {

  useEffect(() => {
    const socket = io();
    socket.on('now', (data: any ) =>{
      console.log(`data`);
      console.log(data);
    });
  }, []);

  const [name, setName] = useState("");

  return (
    <>
      <Header />
      Please enter your name:
      <input type="text" value={name} onChange={e => setName(e.target.value)}/>
    </>
  )
}
