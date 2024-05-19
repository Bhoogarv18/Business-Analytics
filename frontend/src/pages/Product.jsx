import React, { useEffect, useState } from "react";
import PriceInfoCard from "../components/PriceInfoCard";
import ProductCard from "../components/ProductCard";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../api/getProductById";
import DashboardCard07 from "../partials/dashboard/DashboardCard07";
import DashboardCard12 from "../partials/dashboard/DashboardCard12";
import DashboardCard13 from "../partials/dashboard/DashboardCard13";
import DashboardCard10 from "../partials/dashboard/DashboardCard10";
import { getSimilarProducts } from "../api/getSimilarProducts";
import Dash from "../partials/dashboard/Dash";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      console.log("fecth call");
      try {
        const fetchedProduct = await getProductById(id);
        setProduct(fetchedProduct);

        if (!fetchedProduct) {
          navigate("/");
        } else {
          // const fetchedSimilarProducts = await getSimilarProducts(
          //   fetchedProduct?.similar_products
          // );
          // console.log("fetched Products Similar:", fetchedSimilarProducts);
          // setSimilarProducts(fetchedSimilarProducts);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchProductData();
  }, [id, navigate]);

  return (
    <div className="product-container p-10">
      <div className="flex gap-28 xl:flex-row flex-col">
        <div className="product-image">
          <img
            src={product?.picture}
            alt={product?.title}
            width={580}
            height={400}
            className="mx-auto"
          />
        </div>

        <div className="flex-1 flex flex-col">
          <div className="flex justify-between items-start gap-5 flex-wrap pb-6">
            <div className="flex flex-col gap-3">
              <p className="text-[28px] text-secondary font-semibold">
                {product?.title}
              </p>

              <a
                href={product?.url}
                target="_blank"
                className="text-base text-black opacity-50"
              >
                Visit Product
              </a>
            </div>
          </div>

          <p className="text-[34px] text-secondary font-bold">
            {product?.price && !product?.price.startsWith("₹") && "₹"}
            {product?.price}
          </p>
          {product?.sentimental_score && (
            <h1 className="mt-4 text-4xl leading-[52px] font-bold tracking-[-1.2px] text-gray-900;">
              Sentimental Score:
              <span className="text-primary text-red-600">
                {product?.sentimental_score * 100} %
              </span>
            </h1>
          )}
        </div>
      </div>
      {product?.recom && <DashboardCard13 data={product.recom} />}
      <div className="pt-4">
        {product?.details && <DashboardCard12 data={product?.details} />}
      </div>

      {product?.technical_details && (
        <DashboardCard07 data={product?.technical_details} />
      )}
      {product?.reviews && <DashboardCard10 data={product?.reviews} />}

      {similarProducts && similarProducts?.length > 0 && (
        <div className="pt-4 flex flex-col gap-2 w-full">
          <h1 className="section-text text-4xl">Similar Products</h1>

          <div className="flex flex-wrap gap-10 w-full">
            {similarProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      )}
      {product?.similar_products && product?.similar_products.length > 0 && (
          <Dash data={product.similar_products} />
      )}
    </div>
  );
};

export default Product;
