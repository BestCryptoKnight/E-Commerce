import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const { id } = useParams();

  return (
    <main>
      <h1>SingleProduct</h1>
    </main>
  );
};

export default SingleProduct;
