import React, { useState } from 'react'
import { GoChevronDown,GoChevronUp } from "react-icons/go";
import ResMenu from './ResMenu';

const ResCategory = (props) => {

    const {itemCards,title}=props.items;
    const {showItems,setShowIndex,index}=props;
    const [indx,setIndx]=useState(null);

    const handleClick=()=>{
        if(index===indx){
            setShowIndex(null);
            setIndx(null);
        }
        else
        {
            setIndx(index);
            setShowIndex(index);
        }
    }

  return (
    <div className='mt-2 mb-4 bg-white'>
        <div className='p-5 shadow-lg'>
            <div onClick={handleClick} className='flex items-center justify-between cursor-pointer'>
                <span className='text-md font-bold font-price'>{title} ({itemCards?.length})</span>
                {showItems?<span><GoChevronUp size={25}/></span>:
                <span><GoChevronDown size={25}/></span>}
            </div>
            {showItems?
            (<div className='mt-2'>
                {itemCards.map((i)=>{   
                return <ResMenu key={i.card.info.id} details={i}/>
            })}
            </div>):""}
        </div>
    </div>
  )
}

export default ResCategory
