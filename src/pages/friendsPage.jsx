import "./App.css";
import { GrFormNextLink } from "react-icons/gr";
import { FaPaperclip } from "react-icons/fa";
import { RiShare2Fill } from "react-icons/ri";
import { FaRegCopy } from "react-icons/fa6";
import { useState } from "react";

function App() {
  const [friends, setFriends] = useState(0);
  const [coin, setCoin] = useState(0);
  const [inviteLink, setInviteLink] = useState("");
  const [copied, setCopied] = useState(false);

  const shareInviteLink = () => {
    // Implement your sharing logic here, e.g., using a sharing library or browser API
    console.log("Sharing invite link:", inviteLink);
  };

  const copyInviteLink = () => {
    navigator.clipboard.writeText(inviteLink);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  // Simulate updating friends and coin values based on user actions or data from an API
  const updateFriendsAndCoins = () => {
    // Replace this with your actual logic to update the values
    setFriends(friends + 1);
    setCoin(coin + 10);
  };

  return (
    <div className="bg-black w-full min-h-screen text-gray-200 p-4 md:p-8">
      <h1 className="text-2xl text-center  font-bold mb-2 mt-14">
        Invite a Friend
      </h1>
      <p className="text-lg mb-6 text-center">
        The more friends you refer, the more you earn and get rewarded!
      </p>

      <div className="flex   justify-around gap-4 mb-6">
        <button
          className="bg-gray-900 hover:bg-gray-800 text-yellow-500 font-bold px-3 py-2 rounded-md flex items-center transition duration-300 ease-in-out"
          onClick={shareInviteLink}
        >
          <RiShare2Fill className="mr-2" /> Share Invite Link
        </button>
        <button
          className="bg-gray-900 hover:bg-gray-800 text-yellow-500 px-3 py-2 rounded-md flex items-center transition duration-300 ease-in-out"
          onClick={copyInviteLink}
        >
          <FaRegCopy className="mr-2" /> {copied ? "Copied!" : "Copy Link"}
        </button>
      </div>

      <div className="flex  sm:flex-row justify-around gap-4 mb-6">
        <div className="bg-gray-800 p-4 rounded-md text-center">
          <h2 className="text-xl font-semibold">{friends} Friends</h2>
          <p className="text-sm">More friends, better results!</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-md ">
          <h2 className="text-xl font-semibold">{coin} Coins</h2>
          <p className="text-sm">Earn 10% of your friends' earnings</p>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6">
        <button className="text-gray-400 hover:text-white transition duration-200">
          Friends List
        </button>
        <button
          className="bg-gray-900 hover:bg-gray-800 font-bold px-6 py-2 rounded-md flex items-center transition duration-300 ease-in-out"
          onClick={updateFriendsAndCoins}
        >
          Claim Rewards <GrFormNextLink className="ml-2 text-yellow-500" />
        </button>
      </div>

      <div>
        <p className="text-gray-400 text-sm text-center">
          You have invited {friends} friends. Refer your friends and family, get
          10% of their earnings & unlock more rewards!
        </p>
      </div>
    </div>
  );
}

export default App;
