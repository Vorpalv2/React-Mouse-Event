import React, { useState } from "react";

function App() {
  const [isHovering, SetHovering] = useState(false);
  const [TextUpdate, SetTextUpdate] = useState("");

  const MouseOver = () => {
    SetHovering(true);
  };

  const MouseOut = () => {
    SetHovering(false);
  };

  const Text = () => {
    SetTextUpdate(TextUpdate);
    console.log(TextUpdate);
  };
  const OnChange = (event) => {
    let newText = event.target.value;
    SetTextUpdate(newText);
    //console.log(newText);
    // console.log("Updating");
  };

  return (
    <div className="container">
      <h1>Hello, {TextUpdate}</h1>
      <input type="text" onChange={OnChange} placeholder="What's your name?" />
      <button
        style={
          isHovering
            ? { backgroundColor: "Black" }
            : { backgroundColor: "White" }
        }
        onMouseOver={MouseOver}
        onMouseOut={MouseOut}
        onClick={Text}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
