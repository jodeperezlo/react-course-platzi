import { useState, useEffect } from 'react';
import Layout from '../../Components/Layout';
import Card from '../../Components/Card';
import ProductDetail from '../../Components/ProductDetail';
import Loading from '../../Components/Loading';

const Home = () => {
  const [items, setItems] = useState(null);
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <Layout>
      <ProductDetail />
      {items ? (
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
          {items.map((item) => (
            <Card data={item} key={item.id} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </Layout>
  );
};

export default Home;
