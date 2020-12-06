import Link from 'next/link'
import Header from 'src/components/Header'

export const getServerSideProps = async (context: any) => {
  return {
    props: {
      ...context.query
    }
  }
}

export default function Home(props: any) {
  console.log(props);
  return (
    <>
      <Header />
      Please enter your name:
      <input type="text"/>
    </>
  )
}
