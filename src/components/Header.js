import React from "react";

const Header = ({ toggle, show }) => {
  const isShow = show
    ? "btn btn-danger"
    : "btn btn-info";
  const text = show ? "CLOSE" : "ADD STUDENT";
  return (
    <nav className="navbar navbar-expand-lg d-flex justify-content-between bg-info">
      <div className="container">
        <button
          className={isShow}
          onClick={toggle}
        >
          {text}
        </button>
        <h2 className="text-white">
          STUDENT EXEAT BOOKING APP
        </h2>
      </div>
    </nav>
  );
};

export default Header;
