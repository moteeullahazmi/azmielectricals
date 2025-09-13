"use client";
import { useEffect } from "react";

export default function GoogleReviews() {
  useEffect(() => {
    const scriptId = "elfsight-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      script.id = scriptId;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div
        className="elfsight-app-b849dece-d183-46f7-b4a0-60cd4c44f509"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
}
