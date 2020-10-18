import Link from 'next/link'
import Header from 'src/components/Header'

export default function Home() {
  return (
    <>
      <Header />
      Please enter your name:
      <input type="text"/>
    </>
  )
}
