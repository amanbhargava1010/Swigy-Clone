/* eslint-disable react-hooks/rules-of-hooks */
import { MENU_IMAGE_URL } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const itemList = ({ items }) => {
  console.log(items);

  const dispatch = useDispatch();

  const handleAdditem = (item) => {
    // dispatch an action
    dispatch(addItem(item));
  }
  return (
    <ul>
      {items.map(item => (
        <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
          <div className="w-9/12">
              <div className="py-2 px-4">
                <span className="font-bold">{item.card.info.name}</span>
                <span className="line-clamp-3 py-3"> ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
              </div>
            <p className="text-pretty px-4">{ item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-2 " >
          <img src={MENU_IMAGE_URL + item.card.info.imageId} alt="" />
            <div>
              <button className=" p-2 w-6/12 shadow-lg bg-orange-200 m-auto rounded-lg text-black align-middle translate-x-16 -translate-y-1/2 " onClick={ ()=>handleAdditem(item)
              }> Add ➕</button>
            </div>
          </div>
        </div>
      ))}
    </ul>
  )
}

export default itemList;