import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer1 from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withResDiscount } from "./RestaurantCard";

const Body = () => {

  const [data1, setData1] = useState([]);
  
  const [FilterData122, setFilterData122] = useState([]);

  const [searchText, setSearchText] = useState("");

  const status = useOnlineStatus();

  const RestaurantCardwithDis = withResDiscount(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data2 = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data2.json();
    console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setData1(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilterData122(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  //json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants

  // this is known as condtional rendering. 
  
  if (data1.length === 0) {
    return (
      <div>
        <Shimmer1></Shimmer1>
      </div>
    )
  }

  if (status === false) {
    return (
      <h1 className="internet-status"> Looks like you are offline . Please check your internet Connection. </h1>
    )
  }
  return (
    <div className="body">
      <div className="filter flex justify-center w">
        <div className="search px-4 m-4  flex">
          <input type="search" className="border border-solid border-emerald-600 w-[1200px] h-50 forced-color-adjust-auto cursor-pointer px-5" value={searchText} onChange={(e) => {
            setSearchText(e.target.value);
          }} />
          <button className="px-4 bg-green-100 m-4 rounded-lg " onClick={() => {
            const filteredres = data1.filter( (Restaurant) =>
              Restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilterData122(filteredres);
          }}>Search</button>

          <button className="filter-btn px-4 bg-green-100 m-4 rounded-lg"
          onClick={() => {
            const filterdatres = data1.filter( (Restaurant) =>
              Restaurant.info.avgRating > 4.5
            );
            setFilterData122(filterdatres);
        }}>Top rated Restaurants</button>
        </div>  
      </div>
      <div className="flex flex-wrap">
        { 
          FilterData122.map((restaurants) => (
            <Link key={restaurants.info.id}
              to={"restaurants/" + restaurants.info.id}>
              {
                // If the restaurant is having the discount applicable then add a discount label to it. 
                restaurants.info.aggregatedDiscountInfoV3 ? <RestaurantCardwithDis resData={restaurants} /> : <RestaurantCard resData={restaurants}></RestaurantCard>
              }
            </Link>
          ))
        }
        
      </div>
    </div>
  );
};

export default Body;