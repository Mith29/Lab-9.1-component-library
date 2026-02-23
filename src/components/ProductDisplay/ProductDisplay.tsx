import type { ProductDisplayProps } from "../../types";
function ProductDisplay({
  product,
  showDescription,
  showStockStatus,
  onAddToCart,
  children
}: ProductDisplayProps) {
  return (
    <div className="flex flex-col justify-center items-center w-200 m-auto mt-20 gap-[10px] bg-gray-50">
      <img
        src={product.imageUrl}
        alt="Wireless Headphones"
        className="w-200 h-50 object-cover rounded-lg shadow-md "
      />
      <p className="font-semibold text-xl">{product.name}</p>
      <p className="font-bold text-blue-700 text-xl">${product.price}</p>
      <p className="text-lg text-gray-600">{showDescription ? product.description : ""}</p>
      <p className="text-green-600">{showStockStatus ? "In Stock" : "Out Of Stock"}</p>
      {children}
      {onAddToCart && (<button onClick = {function () {onAddToCart(product.id)}} className=" text-white bg-blue-500  hover:bg-blue-600 cursor-pointer w-190 rounded-md mb-20
      pt-2 pb-2 text-lg">Add To Cart</button>)}
      
    </div>
  );
}
export default ProductDisplay;
