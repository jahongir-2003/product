import axios from "axios";
import React from "react";
import { Card } from "../components";
import Loader from "../components/Loader/Loader";

const Products = () => {
  const [products, setProducts] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    setIsLoading(true);
    try {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + "products"
      );
      setProducts(response.data);
    } catch (err) {
      setError(err?.message);
    } finally {
      setIsLoading(false);
    }
  }
  if (error) return <div className="text-center">{error}</div>;
  if (isLoading) return <Loader />;
  return (
    <section className="container">
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <Card {...{ product }} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
