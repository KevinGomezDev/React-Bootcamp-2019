import React from "react";

function MainLayout(props) {
  return (
    <div>
      <h1 className="main-title">Movie App</h1>
      <div className="content" />
      {props.children}
    </div>
  );
}

export default MainLayout;
