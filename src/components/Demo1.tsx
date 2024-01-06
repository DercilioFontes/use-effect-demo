import { useState } from "react";

/*
 > Demo1
  - Pure function
  - Reactive
  - Profiler (Dev tool)
  - Events
 */

export const Demo1 = () => {
  const a = 0;
  const [b, setB] = useState(0);

  return (
    <>
      <div className="card">
        <button onClick={() => a + 1}>count A: {a}</button>
      </div>
      <div className="card">
        <button onClick={() => setB(b + 1)}>count B: {b}</button>
      </div>
    </>
  );
};
