import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
const restaurantCard = (props) => {
  // eslint-disable-next-line react/prop-types
  const { resData } = props;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {loggedinUser} = useContext(UserContext);
  
  // eslint-disable-next-line no-unsafe-optional-chaining, react/prop-types
  const {cloudinaryImageId,name,costForTwo,avgRating,cuisines,sla} = resData?.info; 
  return (
    <div className="m-2 p-4 w-[250px] h-auto] border rounded-lg bg-gray-100 hover:bg-zinc-400 mx-2"  >
      <img className="rounded-lg" src={CDN_URL+cloudinaryImageId}/>
      <h3 className="font-bold py-4 text-xl">{name} </h3> 
      <h3>{costForTwo}</h3>
      <h4> {avgRating}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{sla.deliveryTime} Minutes</h4>
      <h4>{loggedinUser}</h4>
    </div>
  );
};

//Higher Order Component
// input - RestaurantCard => RestaurantCardDiscount
// this time the label will return component with discount attached on the top of the image.

 
export const withResDiscount = (RestaurantCard) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    // eslint-disable-next-line react/prop-types
    return (
      <div>
          <label className="absolute bg-black text-white mx-2 p-2 rounded-lg">
            Special Discount Avilable !!
          </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default restaurantCard;