import axios from "axios";
import { useEffect, useState } from "react";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(20);
  const [totalProducts, setTotalProducts] = useState(0);
  const [products] = useState([
    {
      id: 1,
      title: "Product 1",
      price: 29.99,
      image: "https://via.placeholder.com/150", // Sample image URL
    },
    {
      id: 2,
      title: "Product 2",
      price: 49.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Product 3",
      price: 19.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Product 4",
      price: 39.99,
      image: "https://via.placeholder.com/150",
    },
  ]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const skip = (currentPage - 1) * productsPerPage;
        const response = await axios.get(
          `https://dummyjson.com/products?limit=${productsPerPage}&skip=${skip}`
        );
        console.log(response.data.products);

        setAllProducts(response.data.products);
        setTotalProducts(response.data.total);
      } catch (err) {
        console.log(err);
      }
    };
    getAllProducts();
  }, [currentPage, productsPerPage]);

  // Track quantities for each product
  const [quantities, setQuantities] = useState(
    products.reduce((acc, product) => ({ ...acc, [product.id]: 0 }), {})
  );

  const handleAddToCart = (product) => {
    alert(
      `${product.title} (Quantity: ${quantities[product.id]}) added to cart!`
    );
  };

  const handleQuantityChange = (id, action) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, prev[id] + (action === "increase" ? 1 : -1)),
    }));
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-10">
          All Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {allProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {product.title}
              </h2>
              <h2 className="text-xs mb-2 h-12 overflow-hidden text-ellipsis">
                {product.description.length > 200
                  ? `${product.description.substring(0, 500)}...`
                  : product.description}
              </h2>

              <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>

              {/* Add to Cart and Quantity Selector */}
              <div className="flex items-center justify-between">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
                >
                  Add to Cart
                </button>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleQuantityChange(product.id, "decrease")}
                    className="px-3 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold text-gray-800">
                    {quantities[product.id]}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(product.id, "increase")}
                    className="px-3 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 text-gray-600 rounded-l-md"
        >
          Previous
        </button>
        <span className="px-4 py-2 text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 text-gray-600 rounded-r-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllProducts;
