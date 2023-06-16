import React from "react";
//destructuring
function printer(...input: (number | boolean | string)[]): void {
  input.forEach((el) => console.log(el));
}

interface StringObj {
  a: string;
  b: string;
}

function printerAB({ a, b }: StringObj) {
  console.log(a, b);
}

function Learn7() {
  return (
    <div>
      <button onClick={() => printer(1, true, "하하")}>클릭</button>
      <button onClick={() => printerAB({ a: "a", b: "b" })}>클릭</button>
    </div>
  );
}

export default Learn7;
