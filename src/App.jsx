import "./App.css";

function App() {
  return (
    <div className="bg-black w-screen h-screen p-2">
      <div className="w-screen  bg-gray-900 mt-14 p-2 rounded-md flex justify-around">
        <img
          src="src\assets\images\star.png"
          alt="image part"
          className="h-14 w-12"
        />
        <button className="bg-gray-700 p-3 rounded-3xl ml-2">open</button>
      </div>
    </div>
  );
}

export default App;
