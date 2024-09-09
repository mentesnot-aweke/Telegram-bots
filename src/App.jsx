import "./App.css";

function App() {
  return (
    <div className="bg-black w-screen h-screen p-2">
      <div className="  bg-gray-900 mt-24 p-2 rounded-md flex justify-around">
        <img
          src="src\assets\images\shootingStar.png "
          alt="image part"
          className="h-8 w-6 -ml-3"
        />
        <button className="bg-gray-700 px-2 rounded-3xl ml-2">open</button>
      </div>
    </div>
  );
}

export default App;
