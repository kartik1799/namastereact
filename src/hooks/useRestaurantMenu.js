import { useEffect, useState } from "react"

const useRestaurantMenu=(id)=>{

    const [resDetail,setResDetail]=useState(null);

    useEffect(()=>{
        fetchRestaurant()
    },[])

    const fetchRestaurant=async()=>{
        const data=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.60906558847164&lng=77.3776601627469&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
        const json=await data.json();
        setResDetail(json.data)
    }

    return resDetail;
}

export default useRestaurantMenu;