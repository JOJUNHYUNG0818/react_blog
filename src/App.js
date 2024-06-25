/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  let [a, b] = useState(["남자 코트 추천", "강남 우동맛집", "파이썬독학"]);
  let [좋아요, 좋아요변경] = useState(0);
  // function 함수() {
  //   console.log(1);
  // }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "red", fontSize: "20px" }}>블로그임</h4>
      </div>
      <div className="list">
        <h4>
          {a[0]}{" "}
          <span
            onClick={() => {
              좋아요변경(좋아요 + 1);
            }}
          >
            ❤
          </span>{" "}
          {좋아요}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{a[1]}</h4>
        <p>2월 18일 발행</p>
      </div>
      <div className="list">
        <h4>{a[2]}</h4>
        <p>2월 19일 발행</p>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
