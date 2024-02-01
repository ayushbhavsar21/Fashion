import React from 'react'
import Navbar from '../components/Navbar';
import { FooterFour } from '../components/FooterFour';
import CartCard from '../components/CartCard';
const products = [
    {
      id: 1,
      name: 'Nike men maroon shirt',
      href: '#',
      price: '₹47,199',
      originalPrice: '₹48,900',
      discount: '5% Off',
      color: 'Orange',
      size: '8 UK',
      imageSrc:
        'https://images.unsplash.com/photo-1602810318660-d2c46b750f88?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      name: 'Nike men printed shirt',
      href: '#',
      price: '₹1,549',
      originalPrice: '₹2,499',
      discount: '38% off',
      color: 'White',
      leadTime: '3-4 weeks',
      size: '8 UK',
      imageSrc:
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      name: 'Nike Air Max 90',
      href: '#',
      price: '₹2219 ',
      originalPrice: '₹999',
      discount: '78% off',
      color: 'Black',
      imageSrc:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/dunk-high-retro-shoe-DdRmMZ.png',
    },
  ]
  
function Cart() {

    return (
        <div className='bg-primary'>
            <Navbar/>
            <div className="mx-auto my-4 max-w-4xl md:my-6 px-4">
      <div className="overflow-hidden rounded-xl border border-gray-100 shadow">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product List */}
          <div className="px-5 py-6 md:border-r md:border-r-gray-200 md:px-8">
            <div className="flow-root">
              <ul className="-my-7 divide-y divide-gray-200">
                {products.map((product) => (
                 <CartCard key={product.id} product={product} />
                ))}
              </ul>
              <hr className="mt-6 border-gray-200" />
              <ul className="mt-6 space-y-3">
                <li className="flex items-center justify-between">
                  <p className="text-sm font-medium">Sub total</p>
                  <p className="text-sm font-medium">₹1,14,399</p>
                </li>
                <li className="flex items-center justify-between">
                  <p className="text-sm font-medium ">Total</p>
                  <p className="text-sm font-bold ">₹1,14,399</p>
                </li>
              </ul>
            </div>
          </div>
          {/* Contact Info */}
          <div className="px-5 py-6 md:px-8">
            <div className="flow-root">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="py-6">
                  <h2 className="text-base font-bold text-black">Contact Information</h2>
                  <p className="fontmedium mt-3 text-xs text-gray-700">Order Number: #9876567890</p>
                  <p className="text-xs font-medium text-gray-700">Date: March 03, 2023</p>
                  <button
                    type="button"
                    className="mt-4 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Proceed to Pay
                  </button>
                </div>
                <div className="py-6">
                  <h2 className="mb-2 text-base font-bold text-black">Shipping Information</h2>
                  <p className="mt-3 text-xs font-medium text-gray-700">Lem Deluce</p>
                  <p className="text-xs font-medium text-gray-700">1 Ronald Regan Court</p>
                  <p className="text-xs font-medium text-gray-700">102-655-3689</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        <FooterFour/>
        </div>
        
      )
}

export  default Cart;



