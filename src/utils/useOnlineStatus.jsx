import { useEffect,useState } from "react";

const useOnlineStatus = () => {
  // check if online
  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);
  // using the eventListener to have the current status of the internet. 
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    })

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    })
  }, []);
  // onlineStatus is boolean value
  return onlineStatus;
}

export default useOnlineStatus;