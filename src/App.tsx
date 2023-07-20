import { Fragment } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
}

export default App;
