import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CDN_IMG_URL } from '../utils/constants';
import { clearCart, removeItem } from '../utils/slices/cartSlice';

const Cart = () => {

    const selector=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    console.log(selector);

    const handleRemoveItem=(item)=>{
        console.log(item);
        dispatch(removeItem(item));
    }

    if(selector.length===0){
        return <div className='mx-[5%] mt-2 font-bold text-lg font-add'><p>Your cart looks empty!!Please add some items.</p></div>
    }

  return (
    <div className='mx-[20%]'>
      <p className='text-xl font-bold underline mt-4'>Your Cart</p>
      {selector.map((i)=>{
        return(
            <div data-testid="resMenu" className='py-[1%] px-[3%]'>
            <div className='flex justify-between items-center mb-[2%]'>
                <div className='w-[70%] mr-8'>
                    <div className='flex items-center text-yellow'>
                        {i.isVeg?<img className='w-[20px] h-[20px]' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png'/>:<img className='w-[20px] h-[20px]' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/480px-Non_veg_symbol.svg.png'/>}
                        <span className='text-xs font-bold ml-[5px]'>{i.isBestseller?"⭐Bestseller":""}</span>
                    </div>
                    <div className='mt-[4px] ml-1 flex flex-col'>
                        <span className='font-card font-bold text-md'>
                        {i.name}
                        </span>
                        <span className='text-base font-price font-semibold text-graynext'>₹ {i.defaultPrice/100}</span>
                    </div>
                    <div className='text-gray1 mt-[5px] text-[85%] ml-1'>{i.description}</div>
                </div>
                <div className='flex flex-col justify-between items-center mt-8'>
                    <img className='rounded-3xl w-[70%]' src={`${CDN_IMG_URL}${i.imageId}`} alt="" />
                    <button onClick={()=>handleRemoveItem(i.id)} className='static px-[4%] py-[3%] w-[52%] text-[92%] bg-white border border-border-light rounded-md z-20 mt-[-12%] font-price font-bold text-green cursor-pointer shadow-md hover:shadow'>Remove</button>
                </div>
          </div>
          <hr className='border border-border-light'/>
        </div>)
      })}
      <div> <button onClick={()=>dispatch(clearCart())} className='px-[2%] py-1 ml-[80%] w-fit bg-black border text-white mt-2 mb-4 border-border-light rounded-md'>Clear Cart</button></div>
    </div>
  )
}

export default Cart
