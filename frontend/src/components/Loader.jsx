import React from "react";

const Loader = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        height: "100vh",           // full viewport height to center vertically
        backgroundColor: "#FFDAB9", // light orange (Peach Puff)
        textAlign: "center",
      }}
    >
      <div
        className="rounded-circle border"
        style={{
          width: "40px",
          height: "40px",
          borderTopColor: "#0d6efd",  // Bootstrap primary blue
          borderWidth: "4px",
          borderStyle: "solid",
          animation: "spin 1s linear infinite",
          marginBottom: "15px",
        }}
      />
      <p className="hometxt fw-bold fs-5">Loading...</p>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
