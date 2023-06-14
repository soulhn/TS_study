import React, { useState } from "react";

let t1 = { subject: "math" };
let t2 = { subject: ["science", "english"] };
let t3 = { subject: ["science", "art", "korean"] };

/**
 * 주어진 입력에서 마지막 과목을 반환합니다.
 *
 * @param input - 'subject' 필드가 포함된 객체입니다. 'subject'는 문자열 또는 문자열의 배열이 될 수 있습니다.
 * - 'subject'이 문자열인 경우, 그대로 반환됩니다.
 * - 'subject'이 문자열의 배열인 경우, 마지막 원소가 반환됩니다.
 * - 'subject'이 둘 다 아닌 경우, "빈값"이 반환됩니다.
 * @returns 마지막 과목을 문자열로 반환하거나, 'subject'이 문자열이나 문자열의 배열이 아닌 경우 "빈값"을 반환합니다.
 */
function solution1(input: { subject: string | string[] }) {
  if (typeof input.subject === "string") {
    return input.subject;
  } else if (Array.isArray(input.subject)) {
    return input.subject[input.subject.length - 1];
  } else {
    return "빈값";
  }
}

function Learn2() {
  const [result, setResult] = useState("");
  return (
    <div>
      <div>
        <button onClick={() => setResult(solution1(t1))}>t1 버튼을 클릭하세요.</button>
        <button onClick={() => setResult(solution1(t2))}>t2 버튼을 클릭하세요.</button>
        <button onClick={() => setResult(solution1(t3))}>t3 버튼을 클릭하세요.</button>
        {result}
      </div>
    </div>
  );
}

export default Learn2;
