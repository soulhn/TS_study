//함수와 methods 타입 지정
import React, { useState } from "react";

type myfunction = (a: string) => number;

type Member = {
  name: string;
  age: number;
  plusOne: (x: number) => number;
  changeName: () => void;
};

const numtoString: myfunction = function (inputNum) {
  return parseInt(inputNum, 10);
};

let userInfo: Member = {
  name: "kim",
  age: 30,
  plusOne(x) {
    return x + 1;
  },
  changeName: () => {
    console.log("안녕");
  },
};

//문자 맨앞 "0" 존재 시 제거하고 문자 type으로 return
type CutZeroType = (x: string) => string;
const cutZero: CutZeroType = function (x) {
  //정규식 /^0+/는 입력된 문자열의 시작 부분에서 연속된 0을 찾아 제거하는 패턴
  // /^0+/는 문자열의 시작(^)에서(/) 하나 이상(+)의 0(0)을 찾는다.
  // 정규식의 두 번째 매개변수인 ""는 찾은 패턴을 빈 문자열로 대체하라는 의미
  return x.replace(/^0+/, "");
};

function Learn5() {
  const [result, setResult] = useState<number>(0);
  return (
    <div>
      <button onClick={() => setResult(numtoString("5"))}>클릭해주세요</button>
      <button onClick={() => setResult(parseInt(cutZero("000012345"), 10))}>클릭해주세요</button>
      <div>{result}</div>
      <div>{userInfo.age}</div>
    </div>
  );
}

export default Learn5;
