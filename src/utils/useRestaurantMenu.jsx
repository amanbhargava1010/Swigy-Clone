import { useEffect } from "react";
import { MENU_API } from "./constants";
import { useState } from "react";

const useRestaurantMenu = (resID) => {
  // Here we need to write our logic for the custom hook.
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async() => {
    const data = await fetch(MENU_API + resID);
    const json = await data.json();
    setResInfo(json.data);
  }
  return resInfo;
};

export default useRestaurantMenu;