import React from "react";

export default function Hero(props) {
  return (
    <section className="hero" style={props.style}>
      <div>
        <h2>meet your next book</h2>
      </div>
      <div>
        <h5>Millions of eBooks at your fingertips</h5>
      </div>
    </section>
  );
}
