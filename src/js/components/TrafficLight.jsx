import React, { useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("red");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* Caja del semáforo */}
      <div
        style={{
          backgroundColor: "black",
          width: "100px",
          padding: "20px",
          borderRadius: "20px",
          margin: "auto",
        }}
      >
        {/* Luz roja */}
        <div
          onClick={() => setColor("red")}
          style={{
            height: "80px",
            width: "80px",
            backgroundColor: color === "red" ? "red" : "gray",
            margin: "10px auto",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        ></div>

        {/* Luz amarilla */}
        <div
          onClick={() => setColor("yellow")}
          style={{
            height: "80px",
            width: "80px",
            backgroundColor: color === "yellow" ? "yellow" : "gray",
            margin: "10px auto",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        ></div>

        {/* Luz verde */}
        <div
          onClick={() => setColor("green")}
          style={{
            height: "80px",
            width: "80px",
            backgroundColor: color === "green" ? "green" : "gray",
            margin: "10px auto",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        ></div>
      </div>

      {/* BONUS: Botón para cambiar color en orden */}
      <button id="change-button"
        onClick={() => {
          if (color === "red") setColor("yellow");
          else if (color === "yellow") setColor("green");
          else setColor("red");
        }}
        style={{ marginTop: "20px", padding: "10px 20px", cursor: "pointer" }}
      >
        Cambiar luz
      </button>
    </div>
  );
};

export default TrafficLight;
