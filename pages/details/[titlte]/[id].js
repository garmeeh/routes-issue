import Link from 'next/link';

function ProductPage(props) {
  return (
    <div>
      <h1>[id].js page</h1>
      <p>{props.hello}</p>
      <p>ID: {props.id}</p>
      <Link href="/">
        <a>Home Page</a>
      </Link>
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const { params } = ctx;
  return {
    props: {
      hello: 'hello world',
      id: params.id,
    },
  };
};

export default ProductPage;
