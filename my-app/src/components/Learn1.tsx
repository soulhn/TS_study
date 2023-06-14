import React from "react";

let name: string = "koko";
let age: number = 2;
let nullTest: null = null;
let undTest: undefined = undefined;
let names: string[] = ["koko", "popo"];
const student = { name: "hoho", age: 12 };
let project: { member: string[]; days: number; isStart: boolean } = { member: ["m1", "m2"], days: 10, isStart: false };
let unionTest: number | string = 123;
let unionArray: (number | string)[] = [1, 2, 3, "1", "2", "3"];

function narrowingFunction(x: number | string): void {
  typeof x === "number" ? console.log(x + 1) : console.log("문자를 입력했어요");
}

function Learn1() {
  return (
    <div>
      <p>
        {name}은 {age}살
      </p>
      <p>
        {nullTest}, {undTest}
      </p>
      <p>
        {names[0]}, {names[1]}
      </p>
      <p>
        {student.name}, {student.age}
      </p>
      <p>{project.member[1]}</p>
      <p>유니온 타입 입니다. {unionTest}</p>
      {unionArray.map((value, idx) => (
        <p key={idx}>{value.toString()}</p>
      ))}
      <div>
        <button onClick={() => narrowingFunction("hi")}>문자열 전달 클릭</button>
        <button onClick={() => narrowingFunction(55)}>숫자 전달 클릭</button>
      </div>
    </div>
  );
}

export default Learn1;
