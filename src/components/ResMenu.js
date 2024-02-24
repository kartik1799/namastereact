import React from 'react'
import { CDN_IMG_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/slices/cartSlice';

const ResMenu = (props) => {

    const {details}=props;
    //console.log(details);
    const dispatch=useDispatch();

    const handleCart=()=>{
        dispatch(addItem(details.card.info));
    }

  return (
    <div data-testid="resMenu" className='py-[1%] px-[3%] mt-4'>
        <div className='flex justify-between items-center mb-[2%]'>
            <div className='w-[70%] mr-8'>
                <div className='flex items-center text-yellow'>
                    {details.card.info.isVeg?<img className='w-[20px] h-[20px]' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png'/>:<img className='w-[20px] h-[20px]' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/480px-Non_veg_symbol.svg.png'/>}
                    <span className='text-xs font-bold ml-[5px]'>{details.card.info.isBestseller?"⭐Bestseller":""}</span>
                </div>
                <div className='mt-[4px] ml-1 flex flex-col'>
                    <span className='font-card font-bold text-md'>
                    {details.card.info.name}
                    </span>
                    <span className='text-base font-price font-semibold text-graynext'>₹ {details.card.info.defaultPrice/100}</span>
                </div>
                <div className='text-gray1 mt-[5px] text-[85%] ml-1'>{details.card.info.description}</div>
            </div>
            <div className='flex flex-col justify-between items-center mt-8'>
                <img className='rounded-3xl w-[70%]' src={`${CDN_IMG_URL}${details.card.info.imageId}`} alt="" />
                <button onClick={handleCart} className='static px-[4%] py-[3%] w-[52%] text-[92%] bg-white border border-border-light rounded-md z-20 mt-[-12%] font-price font-bold text-green cursor-pointer shadow-md hover:shadow'>ADD</button>
            </div>
      </div>
      <hr className='border border-border-light'/>
    </div>

  )
}

export default ResMenu
