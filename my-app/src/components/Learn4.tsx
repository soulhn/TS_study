import { useState } from "react";
import React from "react";
// Literal Types을 학습합니다.

let myName: "안" | "녕" | "하" | "세" | "요";

myName = "세";

function OneOrzero(input: number): 1 | 0 {
  return 1;
}

type rspArray = ("rock" | "paper" | "scissors")[];
type rsp = "rock" | "paper" | "scissors";

function RockPaperScissors(input: rspArray) {
  return input[0];
}

type a = 1 | 0;

function Learn4() {
  const [result, setResult] = useState<a>(0);
  const [rspResult, serRspResult] = useState<rsp>("rock");

  return (
    <div>
      <div>{myName}</div>
      <button onClick={() => setResult(OneOrzero(5))}>{result}</button>
      <div>
        <button onClick={() => serRspResult(RockPaperScissors(["scissors"]))}>가위</button>
        <button onClick={() => serRspResult(RockPaperScissors(["rock"]))}>바위</button>
        <button onClick={() => serRspResult(RockPaperScissors(["paper"]))}>보</button>
        <p>누른 결과 : {rspResult}</p>
      </div>
    </div>
  );
}

export default Learn4;
