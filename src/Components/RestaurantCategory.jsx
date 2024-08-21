/* eslint-disable react/prop-types */

import ItemList from "./itemList";

const RestaurantCategory = ({data,showItems,setShowIndex}) => {
  console.log(data);
  

  const handleClick = () => {
    setShowIndex();
  }

  return (
    //   Accordian Header 
    <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4">
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">{data.title} ({data.length ? data.length: data.itemCards.length})</span>
          <span>⬇️</span>
      </div>
      {/* // Accordian Body */}
      { showItems && <ItemList items={data.itemCards} />}
    </div>
  );
}

export default RestaurantCategory;