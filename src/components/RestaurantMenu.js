import React, { useEffect, useState } from 'react'
import { CDN_RES_MENU_URL_LAST, CDN_RES_MENU_URL_START } from '../utils/constants'
import { useParams } from 'react-router-dom';
import { AiOutlineClockCircle } from "react-icons/ai";
import ShimmerRes from './ShimmerRes';
import ResMenu from './ResMenu';
import useRestaurantMenu from '../hooks/useRestaurantMenu';
import ResCategory from './ResCategory';

const RestaurantMenu = () => {

    const {resId}=useParams();
    console.log(resId);

   const resDetail=useRestaurantMenu(resId);
   const [showIndex,setShowIndex]=useState(null);

    if(resDetail===null){
        return <ShimmerRes/>
    }

    const {name,cuisines,avgRating,areaName,totalRatingsString,sla,costForTwoMessage}=resDetail?.cards[2]?.card?.card?.info;
    // const {itemCards}=resDetail?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;

    //console.log(resDetail.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
    const categories=resDetail?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(i=>i?.card?.card["@type"]==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
    //console.log(categories);

  return (
    <div className='flex flex-col my-[2%] mx-[20%]'>
        <div className='flex justify-between'>
            <div className='flex flex-col'>
                <span className='font-extrabold text-lg'>{name}</span>
                <span className='mt-[2px] text-gray1'>{cuisines.join(", ")}</span>
                <span className='text-graynext'>{areaName}</span>
            </div>
            <div className='flex flex-col p-[1%] border border-border-light gap-2 rounded-2xl'>
                <span className='text-green font-bold ml-auto mr-auto font-rating'>{avgRating}</span>
                <span className='border border-border-light'></span>
                <span className='text-[70%] text-gray2 font-medium'>{totalRatingsString}</span>
            </div>
        </div>
        <span className='mt-[20px] border border-black border-dotted'></span>
        <div className='flex items-center p-[10px] gap-[8%] font-semibold'>
            <div className='flex items-center gap-1'>
            <AiOutlineClockCircle size="20px"/>
            <span>{sla.deliveryTime} MINS</span>
            </div>
            <div className='flex items-start'>
                <span className='text-lg border border-black rounded-2xl px-[5px]'>₹</span>
                <span className='ml-[5px] mt-0.5'>{costForTwoMessage}</span>
            </div>
        </div>
        <div className='bg-gray mt-8'>
            {categories.map((i,index)=>{
                return <ResCategory key={i.card.card.title} items={i.card.card} index={index} showItems={index===showIndex?true:false} setShowIndex={setShowIndex}/>
            })}
            </div>
        {/* <div className='mt-[30px]'>
            <h3 className='font-bold'>Recommended ({itemCards.length})</h3>
            {itemCards.map((i)=>{   
                return <ResMenu key={i.card.info.id} details={i}/>
            })}
        </div> */}
    </div>
  )
}


export default RestaurantMenu
