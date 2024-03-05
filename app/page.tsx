"use client";
import React, { useState, useEffect } from "react";

export default function HomePage() {
  const [a, setA] = useState(0);

  useEffect(() => {
    const test = () => {
      setA((a) => a + 1);
    };

    // window.addEventListener('mousemove', test);

    return () => {
      window.removeEventListener("mousemove", test);
    };
  }, []);

  return (
    <div>
      <span className="text-2xl">{a}</span>
    </div>
  );
}
