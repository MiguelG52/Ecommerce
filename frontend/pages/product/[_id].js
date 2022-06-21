import React, {useState, useEffect} from 'react'
import { loadProducDetail, loadBestProducts } from '../../lib/products';
import { Toast, showToast } from '../../components';

const ProductDetail = ({productDetail}) => {
  
  const [quantity, setQuantity] = useState(1);
  const { category, description, img, name, price, stock } = productDetail;
  const [showToast, setShowToast] = useState(false);


  const handleClickQuantityPlus = ()=> quantity < stock ? setQuantity(quantity+1):null;
  const handleClickQuantityMinus = ()=> quantity > 1 ? setQuantity(quantity-1):null;
  
  const handleAddToCart = async() => {
    setShowToast(true)
    await setTimeout(()=> setShowToast(false),2000)
    
  
    
  }
  

  return (
    <div>
      <Toast message={"Añadido al carrito correctamente"} isActive={showToast}/>
      
      {/* Product container */}
      <div className='p-5 md:p-14 lg:ml-32 lg:mr-32 grid md:grid-cols-2 gap-10'>

        {/**Image container */}
        <div className='product-card p-6 w-full'>
            <picture>
              <img  src={img.url}/>

            </picture>
        </div>

        {/** Informaction container */}
        <div className='capitalize flex-col flex gap-5 justify-center'>
          <h3 className='text-xl md:text-3xl font-semibold'>{name}</h3>
          
          <div>
            <h4 className='font-semibold'>Details:</h4>
            <p className='normal-case text-gray-600'>{description}</p>
          </div>

          <h4 className='text-red-500 font-semibold text-xl'>${price}</h4>
          
          <div className='flex items-center gap-4'>
            <p className='font-semibold'>Quantity:</p>
            <div className='flex'>
              <button className={`${quantity === 1 ? 'bg-gray-300 hover:bg-gray-300 hover:text-black':''} btn  w-14 hover:bg-red-500 transition-smooth hover:text-white`} onClick={handleClickQuantityMinus}>
                -
              </button>
              <div className='btn w-10 align-v-center'>
                {quantity}
              </div>
              <button className={`${quantity === stock ? 'bg-gray-300 hover:bg-gray-300 hover:text-black':''}  btn w-14 hover:bg-red-500 transition-smooth hover:text-white`} onClick={handleClickQuantityPlus}>
                +
              </button>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-5'>
            <button onClick={handleAddToCart} className='btn border-red-500   text-red-500 hover:text-white hover:bg-red-500 '>add to cart</button>
            <button className='btn border-red-500  text-white bg-red-500 '>buy now</button>
          </div>
        </div>
      </div>    
    </div>
  )
}
export async function getStaticPaths(){

  const res = await loadBestProducts();
  const bestProducts = await res.data;

  const paths = bestProducts.map((product) =>({
    params: {_id: product._id}
  }))

  return { paths, fallback:false }
}
export async function getStaticProps({params}){

  

  const res = await loadProducDetail(params._id);
  const productDetail = await res.data;
  return{
    props:{
      productDetail,
    },
  }
}

export default ProductDetail