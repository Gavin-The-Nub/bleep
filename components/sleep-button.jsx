"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export function SleepButton() {
  const [isActivated, setIsActivated] = useState(false);
  const [buttonText, setButtonText] = useState(" Sleep Now");
  const [isShaking, setIsShaking] = useState(false);

  const handleSleepClick = () => {
    if (isActivated) return;

    setIsActivated(true);
    setButtonText(" Entering sleep mode...");

    // Create dark overlay
    const overlay = document.createElement("div");
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.95);
      z-index: 9999;
      opacity: 0;
      transition: opacity 0.5s ease;
      pointer-events: none;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 2rem;
      font-weight: bold;
    `;
    overlay.innerHTML = "💤 Entering sleep mode...";
    document.body.appendChild(overlay);

    // Fade in overlay
    setTimeout(() => {
      overlay.style.opacity = "1";
    }, 100);

    // After 2 seconds, reveal the truth
    setTimeout(() => {
      setButtonText("💀 Just kidding. We don't sleep.");
      overlay.innerHTML = "💀 JUST KIDDING!<br><br>WE DON'T SLEEP!";

      // Remove overlay after showing message
      setTimeout(() => {
        overlay.style.opacity = "0";
        setTimeout(() => {
          if (document.body.contains(overlay)) {
            document.body.removeChild(overlay);
          }
        }, 500);
      }, 1500);

      // Shake the screen
      setIsShaking(true);
      document.body.style.animation = "shake 0.5s ease-in-out";

      // Show alert
      setTimeout(() => {
        alert("You thought we rest? This is Sleepless. 💀");
        setIsShaking(false);
        document.body.style.animation = "";

        // Reset after 3 seconds
        setTimeout(() => {
          setButtonText("😴 Sleep Mode");
          setIsActivated(false);
        }, 3000);
      }, 2000);
    }, 2000);
  };

  return (
    <Button
      size="lg"
      onClick={handleSleepClick}
      disabled={isActivated}
      className={`bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white text-lg px-8 py-4 transition-all duration-300 ${
        isShaking ? "animate-pulse" : ""
      } ${isActivated ? "opacity-75 cursor-not-allowed" : ""}`}
    >
      {buttonText}
    </Button>
  );
}
