import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate, Link } from 'react-router-dom';

const ProductCart = ({ id, image, title, price, discountPercentage, rating, stock, finalPrice, isOnSale, stockStatus }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleBuyNow = async () => {
    setIsLoading(true);
    try {
      // Navigate to product details page
      navigate(`/products/${id}`);
    } catch (error) {
      console.error('Error navigating to product:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
      <Link to={`/products/${id}`} className="block">
        <img 
          className="p-8 rounded-t-lg w-full h-64 object-contain hover:scale-105 transition-transform duration-300" 
          src={image} 
          alt={title}
          onError={(e) => {
            e.target.src = "https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg";
          }}
        />
      </Link>
      <div className="px-5 pb-5">
        <Link to={`/products/${id}`} className="block">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white hover:text-primary-700 dark:hover:text-primary-400 transition-colors duration-200">
            {title}
          </h5>
        </Link>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < Math.floor(rating)
                    ? 'text-yellow-300'
                    : 'text-gray-300 dark:text-gray-600'
                  }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.924 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
            {rating}
          </span>
          <span className="text-gray-500 text-sm ms-2">({Math.floor(Math.random() * 500) + 50} reviews)</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                ${finalPrice ? finalPrice.toFixed(2) : price}
              </span>
              {isOnSale && (
                <span className="text-sm text-gray-500 line-through">
                  ${price}
                </span>
              )}
            </div>
            {discountPercentage && (
              <span className="text-sm text-green-600 font-medium">
                {Math.round(discountPercentage)}% OFF
              </span>
            )}
          </div>
          <button
            onClick={handleBuyNow}
            disabled={isLoading}
            className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {isLoading ? 'Loading...' : 'Buy now'}
          </button>
        </div>
        {stockStatus && (
          <div className="mt-2">
            <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${
              stockStatus === 'In Stock' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
              stockStatus === 'Low Stock' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' :
              'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
            }`}>
              {stockStatus}
            </span>
          </div>
        )}
        <div className="mt-3">
          <Link 
            to={`/products/${id}`}
            className="text-primary-700 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium underline hover:no-underline transition-colors duration-200"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
};

const ProductLayout = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Enhanced API call with better error handling and caching
        const response = await fetch('https://dummyjson.com/products?limit=20', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          // Add timeout handling
          signal: AbortSignal.timeout(10000) // 10 second timeout
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Validate the response structure
        if (!data.products || !Array.isArray(data.products)) {
          throw new Error('Invalid data structure received from API');
        }
        
        // Process and enhance the product data
        const enhancedProducts = data.products.map(product => ({
          ...product,
          // Add computed fields
          finalPrice: product.price - (product.price * (product.discountPercentage || 0) / 100),
          isOnSale: product.discountPercentage > 0,
          stockStatus: product.stock > 10 ? 'In Stock' : product.stock > 0 ? 'Low Stock' : 'Out of Stock'
        }));
        
        setProductData(enhancedProducts);
        
        // Track successful API call
        try {
          await fetch('/api/track-interaction', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
              action: 'products_fetched', 
              count: enhancedProducts.length,
              timestamp: new Date().toISOString()
            })
          });
        } catch (trackingError) {
          console.warn('Failed to track product fetch:', trackingError);
        }
        
      } catch (error) {
        console.error('Error fetching products:', error);
        setError(error.message);
        
        // Fallback to local data with enhanced structure
        const enhancedDefaultData = defaultProductData.map(product => ({
          ...product,
          finalPrice: product.price - (product.price * (product.discountPercentage || 0) / 100),
          isOnSale: product.discountPercentage > 0,
          stockStatus: product.stock > 10 ? 'In Stock' : product.stock > 0 ? 'Low Stock' : 'Out of Stock'
        }));
        
        setProductData(enhancedDefaultData);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5 px-5">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg shadow animate-pulse">
              <div className="p-8 bg-gray-200 rounded-t-lg h-64"></div>
              <div className="px-5 pb-5">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-1/3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error && productData.length === 0) {
    return (
      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto py-5 px-5 text-center">
          <p className="text-red-600">Error loading products. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5 px-5">
          {productData.map((item, index) => {
            return (
              <ProductCart
                key={item.id || uuidv4()}
                id={item.id}
                image={item.images && item.images[0] ? item.images[0] : "https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg"}
                title={item.title}
                price={item.price}
                discountPercentage={item.discountPercentage}
                rating={item.rating}
                stock={item.stock}
                finalPrice={item.finalPrice}
                isOnSale={item.isOnSale}
                stockStatus={item.stockStatus}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

// Default product data as fallback
const defaultProductData = [
  {
    id: "1",
    image: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg",
    title: "Apple Watch SE (GPS) 40mm Smartwatch",
    price: "299.99",
    discountPercentage: 15,
    rating: 4.5,
    stock: 99
  },
  {
    id: "2",
    image: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg",
    title: "Apple Watch SE (GPS) 44mm Smartwatch",
    price: "329.99",
    discountPercentage: 15,
    rating: 4.5,
    stock: 75
  },
  {
    id: "3",
    image: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg",
    title: "Apple Watch SE 2 (GPS) 44mm Smartwatch",
    price: "349.99",
    discountPercentage: 10,
    rating: 4.6,
    stock: 50
  },
  {
    id: "4",
    image: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg",
    title: "Apple Watch SE 2 (GPS) 40mm Smartwatch",
    price: "329.99",
    discountPercentage: 18,
    rating: 4.6,
    stock: 120
  },
  {
    id: "5",
    image: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg",
    title: "Apple Watch SE 2 (GPS + Cellular) 44mm Smartwatch",
    price: "399.99",
    discountPercentage: 10,
    rating: 4.6,
    stock: 80
  },
  {
    id: "6",
    image: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg",
    title: "Apple Watch SE 2 (GPS + Cellular) 40mm Smartwatch",
    price: "379.99",
    discountPercentage: 10,
    rating: 4.6,
    stock: 65
  },
  {
    id: "7",
    image: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg",
    title: "Apple Watch Series 9 (GPS) 41mm Smartwatch",
    price: "399.99",
    discountPercentage: 5,
    rating: 4.7,
    stock: 200
  },
  {
    id: "8",
    image: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg",
    title: "Apple Watch Series 10 (GPS) 45mm Smartwatch",
    price: "449.99",
    discountPercentage: 10,
    rating: 4.8,
    stock: 150
  },
  {
    id: "9",
    image: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg",
    title: "Apple Watch Ultra 2 (GPS + Cellular) 49mm Smartwatch",
    price: "799.99",
    discountPercentage: 8,
    rating: 4.8,
    stock: 45
  }
];

export default ProductLayout;