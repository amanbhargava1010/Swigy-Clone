/* eslint-disable react-hooks/rules-of-hooks */
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./itemList";
import { clearCart } from "../utils/cartSlice";
const cart = () => {
  // Always subscribe to the small portion of the store not to the entire store to imporve the performace of the application. 
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  
  const handleClearCart = () => {
    dispatch(clearCart());
  }
  
  return (
    <div className="text-center m-2 p-2">
      <h1 className="text-xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}> Empty Cart</button>
        {cartItems.length === 0 && (
          <h1>Cart is empty. Add Items to the Cart !!</h1>
        ) }
        <ItemList  items={ cartItems} />
      </div>
    </div>
  )
}

export default cart;