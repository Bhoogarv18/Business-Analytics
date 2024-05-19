import React, { useEffect, useState } from "react";
import HeroCarousel from "../components/HeroCarousel";
import { getAllProducts } from "../api/getAllProducts";
import { useThemeProvider } from "../utils/ThemeContext";
import Searchbar from "../components/Searchbar";
import ProductCard from "../components/ProductCard";
import { Grid } from "@mui/joy";

const Home = () => {
  const { currentTheme, changeCurrentTheme } = useThemeProvider();
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getAllProducts();
      setAllProducts(fetchedProducts);
    };
    fetchProducts();
  }, []);
  const refresh = async () => {
    const fetchedProducts = await getAllProducts();
    setAllProducts(fetchedProducts);
  };

  return (
    <div
      className={`px-6 md:px-40 ${currentTheme === "light" ? "bg-white" : ""}`}
    >
      <section className={`py-6`}>
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="flex gap-2 text-sm font-medium text-primary;">
              Smart Business Starts Here:
              <img
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </p>

            <h1 className="mt-4 text-6xl leading-[72px] font-bold tracking-[-1.2px] text-gray-900;">
              Unleash the Power of
              <span className="text-primary text-red-600"> Analytics</span>
            </h1>

            <p className="mt-6">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more.
            </p>

            <Searchbar refresh={refresh} />
          </div>

          <HeroCarousel />
        </div>
      </section>

      {allProducts.length > 0 && (
        <section className="trending-section">
          <h2 className="section-text">All Products</h2>
          <div className="flex flex-wrap gap-x-8 gap-y-16">
            <Grid container>
              {allProducts?.map((product) => (
                <Grid item xs={12} sm={6} md={4} lg={3} sx={{display:"flex", justifyContent:"center",alignItems:"flex-end"}} >
                  <ProductCard key={product._id} product={product} />
                </Grid>
              ))}
            </Grid>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
