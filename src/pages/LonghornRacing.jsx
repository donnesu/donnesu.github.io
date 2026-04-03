import React from 'react';
import "./pages.css"
import { Link } from "react-router-dom"
export default function LonghornRacing() {

  return (
     <div className='crag'> 
      <Link
        to="/"
        style={{
          position: "fixed",   // or "absolute" if you want it relative to a container
          top: 20,
          right: 20,           // <-- use right instead of left
          padding: "10px 15px",
          background: "#D6CEC8",
          color: "#000",
          textDecoration: "none",
          borderRadius: 5,
          boxShadow: "0 2px 4px rgba(0,0,0,.1)",
          fontSize: 16,
          zIndex: 1000
        }}
      >
        Back
      </Link>
        <iframe
          src="https://snowbawler.notion.site/ebd//47e7ee996c284d54a4913cdd62ffdfe3"
          title="Longhorn Racing"
          width="100%"
          height="100%"
          className='notion-iframe notion-iframe--offset'
          frameBorder="0"
          allowFullScreen
        />
    </div>
  );
}
