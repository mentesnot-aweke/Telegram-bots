import "./App.css";
import loading from "./components/loading";
import { GoHome } from "react-icons/go";

import { FaUserFriends } from "react-icons/fa";
import { CiWallet } from "react-icons/ci";
import { BiTask } from "react-icons/bi";
function App() {
  return (
    <div className="bg-black w-screen h-screen">
      <div className="fixed bottom-2 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl  flex justify-around items-center z-50  text-xs">
        <div className="text-center text-gray-200 w-1/5  m-1 p-2 rounded-2xl">
          <GoHome className="w-8 h-8 mx-auto" />
          <p>Home</p>
        </div>
        <div className="text-center text-gray-200 w-1/5  m-1 p-2 rounded-2xl">
          <BiTask className="w-7 h-7 mx-auto" />
          <p>Task</p>
        </div>
        <div className="text-center  text-gray-200  w-1/5  m-1 p-2 rounded-2xl">
          <FaUserFriends className="w-8 h-8 mx-auto" />
          <span>Firends</span>
        </div>
        <div className="text-center  text-gray-200  w-1/5  m-1 p-2 rounded-2xl">
          <CiWallet className="w-8 h-8 mx-auto" />
          <span>wallet</span>
        </div>
      </div>
    </div>
  );
}

export default App;
{
  /* 
   <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#272a2f] flex justify-around items-center z-50 rounded-3xl text-xs">
     
  <div className="text-center text-[#85827d] w-1/5 bg-[#1c1f24] m-1 p-2 rounded-2xl">
        <GoHome alt="Exchange" className="w-8 h-8 mx-auto" />c
        <p className="mt-1">Exchange</p>
      </div>
      <div className="text-center text-[#85827d] w-1/5">
        <Mine className="w-8 h-8 mx-auto" />
        <p className="mt-1">Mine</p>
      </div>
      <div className="text-center text-[#85827d] w-1/5">
        <Friends className="w-8 h-8 mx-auto" />
        <p className="mt-1">Friends</p>
      </div>
      <div className="text-center text-[#85827d] w-1/5">
        <Coins className="w-8 h-8 mx-auto" />
        <p className="mt-1">Earn</p>
      </div>
      <div className="text-center text-[#85827d] w-1/5">
        <img src={hamsterCoin} alt="Airdrop" className="w-8 h-8 mx-auto" />
        <p className="mt-1">Airdrop</p>
      </div>
      </div>
      */
}
