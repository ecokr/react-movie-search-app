import React from "react";

interface printData{
  text:string;
}
const Header = (props:printData) => {
  return (
    <header className="App-header">
      <h2>{props.text}</h2>
    </header>
  );
};

export default Header;
