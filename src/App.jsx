import React, { useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import About from "./Components/About";
import Layout from "./Components/Layout";
import Hero from "./Components/Hero";
import PlayGround from "./Components/PlayGround";
import MotionWrapper from "./Components/MotionWrapper";
import BimblePage from "./Components/BimblePage";
import Nft from "./Components/Nft";
import BimbleDomain from "./Components/BimbleDomain";
import BimbleWelcome from "./Components/BimbleWelcome";
import Discord from "./Components/Discord";

// Counter Component
const Counter = ({ onComplete }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 100) {
          clearInterval(interval);
          onComplete();
          return 100;
        }
        return prevCount + 1;
      });
    }, 30); // Adjust speed as needed

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="flex w-full justify-center px-3 md:px-10 items-center h-screen">
      <h1 className="md:text-[100px] overflow-hidden text-[50px] w-full py-4 border-t-[1px] border-[#B2B2B2] font-monument-extended translate-y-[35vh] md:translate-y-[40vh] font-bold">
        {count}
      </h1>
    </div>
  );
};

const App = () => {
  const location = useLocation();
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMouseMoving, setIsMouseMoving] = useState(false);

  // Custom cursor effect
  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    const delay = 0.17;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsMouseMoving(true);
    };

    const updateCursor = () => {
      cursorX += (mouseX - cursorX) * delay;
      cursorY += (mouseY - cursorY) * delay;

      if (cursor) {
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
      }

      requestAnimationFrame(updateCursor);
    };

    window.addEventListener("mousemove", moveCursor);
    updateCursor();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [isLoading]);

  useEffect(() => {
    const checkIfCounterShouldShow = () => {
      const lastShown = localStorage.getItem("lastCounterShown");
      const now = new Date().getTime();
      const THIRTY_MINUTES = 30 * 60 * 1000; // 30 minutes in milliseconds

      if (!lastShown || now - parseInt(lastShown, 10) > THIRTY_MINUTES) {
        setIsLoading(true);
        sessionStorage.setItem("counterShown", "false"); // Reset for this session
        localStorage.setItem("lastCounterShown", now.toString());
      } else {
        setIsLoading(false);
      }
    };

    checkIfCounterShouldShow();
  }, []);

  const handleCounterComplete = () => {
    setIsLoading(false);
    sessionStorage.setItem("counterShown", "true"); // Set the counter as shown for the session
  };

  if (isLoading) {
    return <Counter onComplete={handleCounterComplete} />;
  }

  return (
    <div className="font-monument-extended  relative">
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className={`cursor fixed hidden xl:flex top-0 left-0 w-[5px] h-[5px] pointer-events-none duration-300 rounded-full z-50 ${
          isMouseMoving ? "block" : "hidden"
        } ${isHovering ? "biggerCursor" : ""}`}
        style={{
          backgroundColor: isHovering ? "black" : "white",
          mixBlendMode: "difference",
          transform: "translate(-50%, -50%)",
        }}
      />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <MotionWrapper>
                <Layout />
              </MotionWrapper>
            }
          >
            <Route
              index
              element={
                <MotionWrapper>
                  <Hero />
                </MotionWrapper>
              }
            />
            <Route
              path="/about"
              element={
                <MotionWrapper>
                  <About />
                </MotionWrapper>
              }
            />
            <Route
              path="/playground"
              element={
                <MotionWrapper>
                  <PlayGround />
                </MotionWrapper>
              }
            />
            <Route
              path="/bimble"
              element={
                <MotionWrapper>
                  <BimblePage />
                </MotionWrapper>
              }
            />
            <Route
              path="/bimbledomain"
              element={
                <MotionWrapper>
                  <BimbleDomain />
                </MotionWrapper>
              }
            />
            <Route
              path="nft"
              element={
                <MotionWrapper>
                  <Nft />
                </MotionWrapper>
              }
            />
            <Route path="/bimble2" element={<BimbleWelcome />} />
            <Route path="/discord" element={<Discord />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
