import React, { useEffect, useRef } from "react";

const clickEvent = (name: string): void => {
  console.log(`${name} 클릭했습니다.`);
};

function EventCapturing() {
  const divRef1 = useRef<HTMLDivElement>(null);
  const divRef2 = useRef<HTMLDivElement>(null);
  const divRef3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef1.current && divRef2.current && divRef3.current) {
      divRef1.current.addEventListener("click", () => clickEvent("3"), true);
      divRef2.current.addEventListener("click", () => clickEvent("2"), true);
      divRef3.current.addEventListener("click", () => clickEvent("1"), true);
    }
  }, []);

  return (
    <div ref={divRef1}>
      <div ref={divRef2}>
        <div ref={divRef3}>
          <button onClick={() => clickEvent("시작")}>클릭</button>
        </div>
      </div>
    </div>
  );
}

export default EventCapturing;
