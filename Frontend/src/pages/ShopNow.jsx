import React from 'react'
import Mens from '../categories/Mens'
import Womens from '../categories/Womens'
import Shoes from '../categories/Shoes'
import shopnow from '../assets/shopnow.jpg'
import { FooterFour } from '../components/FooterFour'
import Navbar from '../components/Navbar'
function ShopNow() {
  return (
   <div className='bg-primary'>
    <Navbar/>
 <div>
<img src={shopnow} alt=""  className='h-[80vh] w-[99vw]'/>
    </div>

      <Mens/>
      <Womens/>
      <Shoes/>
   <FooterFour/>
   </div>
   
    
  )
}

export default ShopNow
