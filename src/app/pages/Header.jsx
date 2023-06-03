import React from "react";

const Header = ({ title }) => {
  return (
    <>
      <div className="card-header border-0 pt-6">
        <h1 className="w-100 text-uppercase" style={{ borderBottom: "1px solid grey" }}>
          {title}
        </h1>
      </div>
    </>
  );
};

export default Header;

