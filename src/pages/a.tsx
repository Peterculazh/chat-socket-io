export const getServerSideProps = async (context: any) => {
  console.log(context.query);
  return {
    props: {
      ...context.query
    }
  }
}
export default function A() {
  return <div>a</div>
}


