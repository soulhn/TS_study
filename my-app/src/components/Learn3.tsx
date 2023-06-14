import React from "react";
type AgeType = {
  readonly age: number;
  test: string;
};

type myNameType = {
  readonly name: string;
  // test: number;
};

const myName: myNameType & AgeType = {
  age: 1,
  name: "koko",
  test: "asd",
};

// readonly로 인하여 obj 자료형 수정 불가능
// myName.name = "popo";

//조건에 만족하는 타입 alias
// 1. obj
// 2. color string 속성을 가질 수도 있다.
// 3. size라는 속성 항상 존재 number
//4. positon 변경 불가능한 숫자 array

type Solution = {
  color?: string;
  size: number;
  readonly postition: number[];
};

const solution: Solution = {
  // color: "blue", 없어도 됩니다.
  size: 5,
  postition: [1, 1, 1, 1, 1],
};

function Learn3() {
  return (
    <div>
      <div>{solution.size}</div>
      <div>{myName.name}</div>
      <div>{myName.age}</div>
    </div>
  );
}

export default Learn3;
