import React from "react";
import { TbBackground } from "react-icons/tb";

function Test() {
  // js 자리
  const handleFocus = () => {
    console.log("포커스 되었네요.");
  };
  const handleBlur = () => {
    console.log("포커스 해제 되었네요.");
  };
  // jsx 자리
  return (
    <div>
      <input type="text" onFocus={handleFocus} onBlur={handleBlur} />
    </div>
  );
}

export default Test;
