import { Fragment } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
// import Header from "./component/Header/Header";

function App() {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
}

export default App;
