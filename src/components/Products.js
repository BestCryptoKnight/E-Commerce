import { useState } from 'react';
import { useStoreContext } from '../context/StoreContext';
import Spinner from './Spinner';

const Products = () => {
  const { products, loading } = useStoreContext();

  const [productsToShow, setProductsToShow] = useState(products.slice(0, 5));

  console.log(products.slice(0, 5));
  /* const [next, setNext] = useState(5);
  const productsPerPage = 5;
  let arrayForHoldingProducts = [];

  const loopWithSlice = (start, end) => {
    const slicedPosts = products.slice(start, end);
    arrayForHoldingProducts = [...arrayForHoldingProducts, ...slicedPosts];
    setProductsToShow(arrayForHoldingProducts);
  };

  useEffect(() => {
    loopWithSlice(0, productsPerPage);
  }, []);

  const handleShowMorePosts = () => {
    loopWithSlice(next, next + productsPerPage);
    setNext(next + productsPerPage);
  }; */

  /* let showProducts = products.slice(0, start); */

  /* const handleClick = () => {
    const newNumber =start += productsPerPage;
    showProducts = 

  }; */
  return (
    <section>
      {loading ? (
        <Spinner />
      ) : (
        productsToShow.map((item) => {
          return (
            <div key={item.id} className="div">
              {item.title}
            </div>
          );
        })
      )}
      <button /* onClick={handleShowMorePosts} */>Show more</button>
    </section>
  );
};

export default Products;
