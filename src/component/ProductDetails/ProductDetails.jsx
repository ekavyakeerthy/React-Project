import { useParams, useNavigate } from "react-router-dom"; 
import { useState, useEffect } from "react";

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isAddingToCart, setIsAddingToCart] = useState(false);
    const [isAddingToFavorites, setIsAddingToFavorites] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }
                const data = await response.json();
                setProduct(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchProduct();
        }
    }, [id]);

    const handleAddToFavorites = async () => {
        setIsAddingToFavorites(true);
        try {
            // Simulate API call to add to favorites
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // You can implement actual API call here
            // const response = await fetch('/api/favorites/add', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ productId: id })
            // });
            
            console.log('Product added to favorites successfully');
            alert('Product added to favorites!');
        } catch (error) {
            console.error('Error adding to favorites:', error);
            alert('Failed to add to favorites. Please try again.');
        } finally {
            setIsAddingToFavorites(false);
        }
    };

    const handleAddToCart = async () => {
        setIsAddingToCart(true);
        try {
            // Simulate API call to add to cart
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // You can implement actual API call here
            // const response = await fetch('/api/cart/add', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ 
            //         productId: id,
            //         quantity: 1,
            //         price: product.price
            //     })
            // });
            
            console.log('Product added to cart successfully');
            alert('Product added to cart!');
        } catch (error) {
            console.error('Error adding to cart:', error);
            alert('Failed to add to cart. Please try again.');
        } finally {
            setIsAddingToCart(false);
        }
    };

    const handleBuyNow = async () => {
        try {
            // Simulate purchase API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // You can implement actual purchase API call here
            // const response = await fetch('/api/purchase', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ 
            //         productId: id,
            //         quantity: 1,
            //         totalAmount: product.price
            //     })
            // });
            
            console.log('Purchase successful');
            alert('Purchase successful! Thank you for your order.');
            navigate('/'); // Navigate back to home page
        } catch (error) {
            console.error('Error processing purchase:', error);
            alert('Purchase failed. Please try again.');
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-xl">Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-xl text-red-500">Error: {error}</div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-xl">Product not found</div>
            </div>
        );
    }

    return (
        <>
        <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
  <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
    <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
      <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
        <img
          className="w-full dark:hidden"
          src={product.images && product.images[0] ? product.images[0] : "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"}
          alt={product.title}
          onError={(e) => {
            e.target.src = "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg";
          }}
        />
        <img
          className="w-full hidden dark:block"
          src={product.images && product.images[0] ? product.images[0] : "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"}
          alt={product.title}
          onError={(e) => {
            e.target.src = "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg";
          }}
        />
      </div>
      <div className="mt-6 sm:mt-8 lg:mt-0">
        <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
          {product.title}
        </h1>
        <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
          <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
            ${product.price}
          </p>
          {product.discountPercentage && (
            <p className="text-sm text-green-600 dark:text-green-400">
              {Math.round(product.discountPercentage)}% off
            </p>
          )}
          <div className="flex items-center gap-2 mt-2 sm:mt-0">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className={`w-4 h-4 ${index < Math.floor(product.rating) ? 'text-yellow-300' : 'text-gray-300'}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
              ))}
            </div>
            <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
              ({product.rating})
            </p>
            {product.reviews && (
              <a
                href="#"
                className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
              >
                {product.reviews.length} Reviews
              </a>
            )}
          </div>
        </div>
        <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
          <button
            onClick={handleAddToFavorites}
            disabled={isAddingToFavorites}
            className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg
              className="w-5 h-5 -ms-2 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
              />
            </svg>
            {isAddingToFavorites ? 'Adding...' : 'Add to favorites'}
          </button>
          <button
            onClick={handleAddToCart}
            disabled={isAddingToCart}
            className="text-white mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg
              className="w-5 h-5 -ms-2 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
              />
            </svg>
            {isAddingToCart ? 'Adding...' : 'Add to cart'}
          </button>
        </div>
        <div className="mt-4">
          <button
            onClick={handleBuyNow}
            className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-3 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800 flex items-center justify-center"
          >
            <svg
              className="w-5 h-5 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Buy Now - ${product.price}
          </button>
        </div>
        <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
        <div className="mb-6">
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            {product.description}
          </p>
          {product.brand && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <span className="font-medium">Brand:</span> {product.brand}
            </p>
          )}
          {product.category && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <span className="font-medium">Category:</span> {product.category}
            </p>
          )}
          {product.stock !== undefined && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <span className="font-medium">Stock:</span> {product.stock} units
            </p>
          )}
        </div>
        {product.tags && product.tags.length > 0 && (
          <div className="mb-6">
            <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">Tags:</p>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full dark:bg-gray-700 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
</section>
        </>
    )
 }

 export default ProductDetails;