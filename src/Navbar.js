import React from "react";

const Navbar = () => {
  return (
    <div
      style={{
        textAlign: "center",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      <input
        type="search"
        placeholder="search"
        style={{
          textAlign: "center",
          color: "red",
          margin: "auto",
          justifyContent: "center",
        }}
      />
      <button>SEARCH</button>
    </div>
  );
};

export default Navbar;