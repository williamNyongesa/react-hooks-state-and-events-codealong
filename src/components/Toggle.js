import React, { useState } from "react";
function Toggle() {
  const [isOn, setIsOn] = useState(false)

  const color = isOn  ? "green": "red"
  
  function handleToggle(){
    setIsOn(!isOn)
  }
  return <button onClick={handleToggle}style={{background:color}}>{isOn?"ON" : "OFF"}</button>;
}

export default Toggle
