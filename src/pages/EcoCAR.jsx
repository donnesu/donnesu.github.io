
import React from 'react';
import "./pages.css"
import { Link } from "react-router-dom"
export default function EcoCAR() {

  return (
    <>
      <Link
        to="/"
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          padding: "10px 15px",
          background: "#D6CEC8",
          color: "#000",
          textDecoration: "none",
          borderRadius: 5,
          boxShadow: "0 2px 4px rgba(0,0,0,.1)",
          fontSize: 16,
          zIndex: 1000,
        }}
      >
        Back
      </Link>
      <div>
        <iframe
          src="https://snowbawler.notion.site/ebd//2c7752a5762e80b68f2ef3204784624b"
          title="EcoCAR"
          width="100%"
          height="100%"
          className='notion-iframe notion-iframe--offset'
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </>
  );
}
