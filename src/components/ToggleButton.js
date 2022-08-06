import React, { useContext } from "react";
import { PinkModeContext } from "../context/PinkModeContext";


function ToggleButton() {
  const{ pinkMode, togglePinkMode } = useContext(PinkModeContext);

  const handleClick = () => {
    togglePinkMode();
  };

  return (
    <div className="toggleButton">
      <i
      className="icon fa-solid fa-toggle-off"
        onClick={handleClick}
      /> 
    </div>
  );
}

// Light Switch design by Jeremy Loyd, US - Public Domain

export default ToggleButton;
