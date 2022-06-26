import React from "react";
import Login from "./Login"
import Form from "./Form"
var userISRegistered = false;
function App() {
  return (
    <div className="container">{
      userISRegistered === true ? <Login /> : <Form />}
    </div>
  );
}

export default App;
