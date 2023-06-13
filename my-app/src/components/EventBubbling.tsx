import React from "react";

const clickEvent = (name: string): void => {
  console.log(`${name} 클릭했습니다.`);
};

function EventBubbling() {
  return (
    <div onClick={() => clickEvent("3")}>
      <div onClick={() => clickEvent("2")}>
        <div onClick={() => clickEvent("1")}>
          <div>
            <button onClick={() => clickEvent("시작")}>클릭</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventBubbling;
