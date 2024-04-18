import React from "react";
import LinesEllipsis from "react-lines-ellipsis";

const ProductCard = ({ product }) => {
  return (
    <a
      href={`/products/${product._id}`}
      className="sm:w-[292px] sm:max-w-[292px] w-full flex-1 flex flex-col gap-4 rounded-md;"
    >
      <div className="flex-1 relative flex flex-col gap-5 p-4 rounded-md;">
        <img
          src={product.picture}
          alt={product.title}
          width={200}
          height={200}
          className="max-h-[250px] object-contain w-full h-full bg-transparent;"
        />
      </div>

      <div className="flex flex-col gap-3">
        <LinesEllipsis
          text={product.title}
          maxLine="2"
          ellipsis="..."
          trimRight
          basedOn="letters"
          className="text-secondary text-xl leading-6 font-semibold truncate;"
        />
        <LinesEllipsis
          text={product.category}
          maxLine="1"
          ellipsis="..."
          trimRight
          basedOn="letters"
          className="text-black opacity-50 text-lg capitalize"
        />

        <p className="text-black text-lg font-semibold">
          {product?.price && !product?.price.startsWith("₹") && "₹"}
          {product?.price}
        </p>
      </div>
    </a>
  );
};

export default ProductCard;
