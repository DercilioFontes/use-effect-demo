import { useState } from "react";

/*
  > Demo1
  - Profiler (Dev tool)
  - Pure function
  - Reactive
  - Events
  - Avoid unnecessary render
 */

export const Demo1 = () => {
  let a = 0;
  const [b, setB] = useState(0);

  return (
    <>
      <div className="card">
        <button
          onClick={() => {
            a += 1;
            console.log({ a });
          }}
        >
          count A: {a}
        </button>
      </div>
      <div className="card">
        <button onClick={() => setB(b + 1)}>count B: {b}</button>
      </div>
    </>
  );
};


// const [a, setA] = useState(0);
// () => setA(a + 1);

export const ButtomB = () => {
  const [b, setB] = useState(0);

  return (
    <div className="card">
      <button onClick={() => setB(b + 1)}>count B: {b}</button>
    </div>
  );
};