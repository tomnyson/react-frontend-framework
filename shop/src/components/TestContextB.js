import React, { useContext } from "react";
import { Context } from "../context/context";

export default function TestContextB() {
  const [context, setContext] = useContext(Context);
  const {name} = context;
  return (
    <div>
      ComponentB:
      {name}
    </div>
  );
}