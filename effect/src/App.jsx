import { useEffect, useState } from "react";
import CardBox from "./CardBox";

function App() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((v) => v.json())
      .then((v) => {
        const { products } = v;
        setProduct((prev) => {
          return products.map(({ title, rating, thumbnail }) => ({
            title,
            rating,
            thumbnail,
          }));
        });
      });
  }, []);

  return (
    <article
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "20px",
      }}
    >
      {product.map((v) => {
        return <CardBox {...v} />;
      })}
    </article>
  );
}
export default App;
