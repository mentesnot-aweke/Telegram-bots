import React from "react";

const taskBar = () => {
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
};

export default taskBar;
