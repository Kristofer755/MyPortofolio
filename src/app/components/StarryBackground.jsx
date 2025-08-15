"use client"; // Only needed in Next.js

import { useEffect, useState } from "react";

export default function StarryBackground() {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    // Generate stars on client
    setStars([...Array(100)].map(() => ({
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      delay: `${Math.random() * 5}s`
    })));

    // Generate meteors on client
    setMeteors([...Array(8)].map(() => ({
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      delay: `${Math.random() * 10}s`
    })));
  }, []);

  return (
    <>
      {/* Star layer */}
<div className="absolute inset-0 z-0 pointer-events-none">
  {stars.map((star, i) => (
    <div
      key={`star-${i}`} // unique key
      className="absolute bg-white rounded-full opacity-80"
      style={{
        width: "2px",
        height: "2px",
        top: star.top,
        left: star.left,
        animation: `twinkle 3s infinite alternate`,
        animationDelay: star.delay
      }}
    />
  ))}
</div>

{/* Meteor layer */}
<div className="absolute inset-0 z-0 pointer-events-none">
  {meteors.map((meteor, i) => (
    <div
      key={`meteor-${i}`} // unique key
      className="absolute bg-gradient-to-r from-white to-transparent"
      style={{
        width: "150px",
        height: "2px",
        top: meteor.top,
        left: meteor.left,
        transform: "rotate(-45deg)",
        animation: `meteor 3s linear infinite`,
        animationDelay: meteor.delay
      }}
    />
  ))}
</div>

    </>
  );
}
