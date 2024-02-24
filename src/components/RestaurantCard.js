import { CDN_URL } from "../utils/constants";
import RestaurantMenu from "./RestaurantMenu";

const RestaurantCard=(props)=>{
    const {resData}=props;
    //console.log(resData);
    return (
        <div data-testid="resCard" className="cursor-pointer transform transition duration-300 hover:scale-105">
            <img style={{width:'100%',height:'200px',borderRadius:'25px'}} src={`${CDN_URL}${resData.cloudinaryImageId}`} alt="" />
            <div style={{paddingLeft:'20px'}}>
                <p className="font-bold text-lg mt-2">{resData.name}</p>
                <p>⭐{resData.avgRating} . {resData.sla.slaString} </p>
                <p className="ml-1 text-gray2 ">{resData.cuisines.join(", ")}</p>
            </div>
        </div>
    )
}

export const withPromotedLabel=(RestaurantCard)=>{
    return (props)=>{
        return (
             <div>
                <label>PROMOTED</label>
                <RestaurantCard {...props}/>
             </div>
        )
    }
}

export default RestaurantCard;