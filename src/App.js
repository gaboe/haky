import React, { useState } from "react";

export default function App() {
  let [value, state] = useState("borec");
  return (
    <>
      <div>Zdenek Mikel je {value}</div>
      <input onChange={e => state(e.target.value)} />
    </>
  );
}
