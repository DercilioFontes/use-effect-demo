import { useState } from "react";

/*
  > Demo2
  - Passing props
 */

export const ButtomA = () => {
  const [a, setA] = useState(0);

  return (
    <div className="card">
      <button onClick={() => setA(a + 1)}>count A: {a}</button>
    </div>
  );
};

export const ButtomB = () => {
  const [b, setB] = useState(0);

  return (
    <div className="card">
      <button onClick={() => setB(b + 1)}>count B: {b}</button>
    </div>
  );
};

export const Demo2 = () => {


  return (
    <>
      <ButtomA />
      <ButtomB />
    </>
  );
};


