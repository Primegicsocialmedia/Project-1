import React from "react";

const App = () => {
  return (
    <div className="bg-deepblue container">
      <h1 className="text-5xl font-bold text-white">
        This is the template with TailwindCSS
      </h1>
      <button className="bg-amber text-alabaster text-2xl font-bold mt-12 rounded px-6 py-4 animate-pulse">
        Click here !
      </button>
      <input
        type="text"
        placeholder="Enter your name"
        className="bg-white text-lg text-amber border-2 rounded ml-4 outline-0"
      />
    </div>
  );
};

export default App;
