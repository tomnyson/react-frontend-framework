import React, { useContext } from "react";
import { Context } from "../context/context";

export default function TestContextA() {
  const [context, setContext] = useContext(Context);
  return (
    <div>
      ComponentA:
      <input type="text" name="name" onChange={(event) => setContext({...context, name: event.target.value})}/>
    </div>
  );
}