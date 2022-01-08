import React, { useContext } from "react";
import { Context } from "../context/context";

export default function TestContextB() {
  const context = useContext(Context); 
  console.log('context',context.old)
  return (
    <div>
      ComponentB:
      {/* {name} */}
    </div>
  );
}