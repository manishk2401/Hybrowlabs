import React, { useState } from "react";

export default function Form() {
  const [string, setString] = useState({});
  const [strCount, setStrCount] = useState({});

  const changeHandle = (ele) => {
    setString({ value: ele });
  };

  const countDup = () => {
    let value = string.value;
    let newObj = {};
    for (let i = 0; i < value.length; i++) {
      let chat = value[i].toLowerCase();
      if (chat && chat !== " ") {
        newObj[chat] ? (newObj[chat] += newObj[chat]) : (newObj[chat] = 1);
      }
    }
    setStrCount(newObj);
  };

  return (
    <div>
      <div style={{ maxWidth: "400px", margin: "auto" }}>
        <label htmlFor="input"></label>
        <input type="text" onChange={(e) => changeHandle(e.target.value)} id="input" />
        <button onClick={() => countDup()}>Submit</button>
        <div>
          Result :{" "}
          <ol style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", flexWrap: "wrap" }}>
            {Object.keys(strCount).map((ele, i) => {
              return (
                <li key={i}>
                  {ele} = {Object.values(strCount)[i]}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
