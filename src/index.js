import React from "react";
import ReactDOM from "react-dom/client";
// import TodoApp from "./feats/TodoApp";
// import Counter from "./feats/Counter";
// import Search from "./feats/Search";
// import Registration from "./feats/Registration";
import Quiz from "./feats/Quiz";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Counter /> */}
    {/* <TodoApp/> */}
    {/* <Search/> */}
    {/* <Registration/> */}
    <Quiz />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
