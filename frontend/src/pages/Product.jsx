import React, { useEffect, useState } from "react";
import PriceInfoCard from "../components/PriceInfoCard";
import ProductCard from "../components/ProductCard";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../api/getProductById";
import DashboardCard07 from "../partials/dashboard/DashboardCard07";
import DashboardCard12 from "../partials/dashboard/DashboardCard12";

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
        }

        // const fetchedSimilarProducts = await getSimilarProducts(id);
        // setSimilarProducts(fetchedSimilarProducts);
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

          <div className="product-info">
            <div className="flex flex-col gap-2">
              <p className="text-[34px] text-secondary font-bold">
                ₹ {product?.price}
              </p>
              <p className="text-[21px] text-black opacity-50 line-through">
                ₹ {product?.original_price}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <div className="product-reviews">
                  <img
                    src="/assets/icons/comment.svg"
                    alt="comment"
                    width={16}
                    height={16}
                  />
                  <p className="text-sm text-secondary font-semibold">
                    {product?.reviews?.length} Reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="my-7 flex flex-col gap-5">
            <div className="flex gap-5 flex-wrap">
              <PriceInfoCard
                title="Current Price"
                iconSrc="/assets/icons/price-tag.svg"
                value={`₹ ${product?.price}`}
              />
              {product?.average_price && (
                <PriceInfoCard
                  title="Average Price"
                  iconSrc="/assets/icons/chart.svg"
                  value={`₹
              ${product?.average_price}`}
                />
              )}
              {product?.highest_price && (
                <PriceInfoCard
                  title="Highest Price"
                  iconSrc="/assets/icons/arrow-up.svg"
                  value={`₹ ${product?.highest_price}`}
                />
              )}
              {product?.lowest_price && (
                <PriceInfoCard
                  title="Lowest Price"
                  iconSrc="/assets/icons/arrow-down.svg"
                  value={`₹ ${product?.lowest_price}`}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4 pb-4">
        {product?.details && <DashboardCard12 data={product?.details} />}
      </div>

      {product?.technical_details && (
        <DashboardCard07 data={product?.technical_details} />
      )}

      {similarProducts && similarProducts?.length > 0 && (
        <div className="py-14 flex flex-col gap-2 w-full">
          <p className="section-text">Similar Products</p>

          <div className="flex flex-wrap gap-10 mt-7 w-full">
            {similarProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
