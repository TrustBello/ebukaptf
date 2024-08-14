import React, { useEffect, useRef, useState } from "react";
import logo from '../Assets/Rectangle 67 (1).png'
import colors from '../Assets/Colors (2).png'
import typeo from '../Assets/Typography (1).png'
import workflow from '../Assets/Rectangle 74 (1).png'
import collab from '../Assets/Rectangle 42.png'
import boxes from '../Assets/Rectangle 53 (1).png'
import rectangle from '../Assets/Rectangle 65 (2).png'
import rectangle2 from '../Assets/Rectangle 66 (2).png'
import poster from "../Assets/Rectangle 48 (1).png";
import video from "../Assets/Brimble Domains.mp4";
import { Link } from "react-router-dom";

const BimbleDomain = () => {
  const [controlsVisible, setControlsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (isPlaying) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const handlePlayEvent = () => {
      setControlsVisible(true);
      setIsPlaying(true);
    };

    const handlePauseEvent = () => {
      setIsPlaying(false);
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("play", handlePlayEvent);
      videoElement.addEventListener("pause", handlePauseEvent);
    }

    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    const handleKeyDown = (e) => {
      if (
        (e.ctrlKey && (e.key === "s" || e.key === "S")) ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "i"))
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("play", handlePlayEvent);
        videoElement.removeEventListener("pause", handlePauseEvent);
      }
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="max-w-[1640px] h-full font-monument-extended my-[20px] mx-auto p-4 px-[30px] lg:px-[40px] xl:px-[65px] flex flex-col items-center justify-center">
      <div className="relative w-full">
        <video
          ref={videoRef}
          className="w-full rounded-lg"
          poster={poster}
          controls={controlsVisible}
          controlsList="nodownload"
          style={{ cursor: "pointer" }}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {!isPlaying && (
          <button
            onClick={handlePlayPause}
            className="absolute inset-0 flex items-center justify-center text-[30px] md:text-[100px] bg-black bg-opacity-20 text-white"
          >
            ▶
          </button>
        )}
      </div>
      <div className="md:flex w-full grid grid-cols-1 gap-4 md:gap-0 justify-start md:justify-between mt-6 md:mt-3">
        <div className="flex flex-col w-full">
          <h1 className="text-[13px] lg:text-[9px] xl:text-[21px]">
            Brimble Domains
          </h1>
          <p className="text-[#737373] text-[9px] lg:text-[12px]">
            Motion & Communication Design
          </p>
        </div>
        <div className="sm:max-w-[500px] max-w-[320px] font-thin text-[10px]">
          Brimble is a Platform as a service that offers web deployment, The
          goal of this project was to create an engaging and visually appealing
          motion design video for Brimble’s Domains feature, highlighting their
          the various domains and the ease of use to potential customers.
        </div>
      </div>

      <div className="md:mt-[50px] flex flex-col w-full mt-[30px] ">
        <div>
          <h1 className="my-3 text-[9px] md:text-[11px] ">Logomark</h1>
        </div>
        <img src={logo} alt="" />
        <div className="sm:max-w-[500px]  mt-6 md:mt-3  max-w-[320px] font-thin text-[10px]">
          The logo adopts a minimalistic and modern design while incorporating a
          stylized ampersand (&), which cleverly suggests the company’s service
          of connectivity and integration.
        </div>
      </div>
      <div className="md:mt-[50px] flex flex-col w-full mt-[30px] ">
        <div>
          <h1 className="my-3 text-[9px] md:text-[11px] ">Colors</h1>
        </div>
        <img src={colors} alt="" />
        <div className="sm:max-w-[500px]  mt-6 md:mt-3  max-w-[320px] font-thin text-[10px]">
          The color palette selected for this project strikes an ideal balance
          between vibrant hues and neutral tones, aligning seamlessly with the
          aesthetic demands of modern technology-oriented brands
        </div>
      </div>
      <div className="md:mt-[50px] flex flex-col w-full mt-[30px] ">
        <div>
          <h1 className="my-3 text-[9px] md:text-[11px] ">Typeface</h1>
        </div>
        <img src={typeo} alt="" />
      </div>

      <div className="md:mt-[50px] w-full mt-[30px] gap-3 flex flex-col">
      <div>
          <h1 className="my-3 text-[9px] md:text-[11px] ">Styleframes</h1>
        </div>
        <div className="w-full">
          <img src={workflow} alt="" className="w-full " />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
          <div className="w-full">
            <img src={collab} alt="" className="w-full " />
          </div>
          <div className="w-full">
            <img src={boxes} alt="" className="w-full " />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
          <div className="w-full">
            <img src={rectangle} alt="" className="w-full " />
          </div>
          <div className="w-full">
            <img src={rectangle2} alt="" className="w-full " />
          </div>
        </div>
      </div>

      <div className="my-6 flex justify-between w-full items-center">
        <div>
          <h1 onClick={scrollToTop} className="cursor-pointer text-[10px] md:text-[15px]">
            Back to top
          </h1>
        </div>
        <div>
          <Link to="/nft" className="cursor-pointer text-[10px] md:text-[15px]">
            Next Page
          </Link>
        </div>
      </div>
    </div>
  );
};
export default BimbleDomain;