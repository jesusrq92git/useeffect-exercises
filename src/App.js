import React, { useState } from "react";
import Lifecycle from "./Lifecycle";
import FetchCard from "./FetchCard";
import ResizeApp from "./ResizeApp";

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>show/hide</button>

      {show && <Lifecycle />}
    </div>
  );
}
