import { useEffect, useState } from "react";
import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";

const MainContainer=()=>{

    const [resData,setResData]=useState([]);
    const [value,setValue]=useState("");
    const [filteredRestaurant,setFilteredRestaurant]=useState([])
    const status=useOnlineStatus();
    const RestaurantLabel=withPromotedLabel(RestaurantCard);

    // const {loggedInUser,setUserName}=useContext(UserContext);

    const filterTopRated=()=>{
        const result=resData.filter((i)=>i.info.avgRating>4)
        setFilteredRestaurant(result);
    }

    //console.log(resData);


    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.60906558847164&lng=77.3776601627469&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();

        //Optional Chaining
        setResData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    console.log(filteredRestaurant.length);

    const searchBtn=()=>{
        console.log(value);
        const data=resData.filter((i)=>i.info.name.toLowerCase().includes(value))
        setFilteredRestaurant(data);
    }

    // if(resData.length===0){
    //     return <Shimmer/>
    // }
    if(status===false){
        return (
            <h3>Looks like you are not online!Please check your internet connection!</h3>
        )
    }

    return(
        <div className="flex flex-col">
            <div className="px-2 pt-4 mx-2">
                <input data-testid="searchInput" className="w-1/2 p-2.5 pl-2 mr-5 outline-none border border-border-light rounded-2xl" value={value} onChange={(e)=>setValue(e.target.value)} type="text" placeholder="Enter the product" />
                <button onClick={searchBtn} className="bg-black text-white border-0 cursor-pointer rounded-xl text-base font-medium p-1.5 px-4">Search</button>
            </div>
            <div className="pt-5 pl-5">
                <button onClick={filterTopRated} className="bg-black text-white border-0 cursor-pointer rounded-xl text-sm font-medium p-2 px-3">Top Rated Restaurant</button>
                {/* <input type="text" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)} /> */}
            </div>
            {resData.length===0?<Shimmer/>:(
            <div className="grid grid-cols-auto-fit-grid px-[10%] py-[3%] gap-10">
                {filteredRestaurant.map((i)=>{
                    return <Link key={i.info.id} to={`/restaurants/${i.info.id}`}>
                    {i.info.promoted?(<RestaurantLabel resData={i?.info}/>):
                        <RestaurantCard resData={i?.info}/>
                    }
                    </Link>
                })}
            </div>)}
        </div>
    )
}

export default MainContainer;