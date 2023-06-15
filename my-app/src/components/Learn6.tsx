//type과 interface 차이점

//interface는 객체의 구조를 표현하고 확장 가능성을 가진다.
//상속이 가능하다

// type은 객체 이외의 타입을 정의하고 별칭을 지정하는 데 사용
// interface는 중복선언 가능
// type은 중복 선언 불가능하다.

import React from "react";

interface Student {
  name: string;
}

interface Teacher extends Student {
  age: number;
}

const myTeacher: Teacher = {
  name: "koko",
  age: 1,
};

function Learn6() {
  return <div>{myTeacher.name}</div>;
}

export default Learn6;
