import React, { useEffect, useRef, useState } from "react";
import nft from "../Assets/Nft1.png";
import web from "../Assets/web3.png";
import video from "../Assets/NFT ng.mp4";
import color from '../Assets/Colors (1).png'
import rec from '../Assets/Rectangle 74.png'
import rec2 from '../Assets/Rectangle 68.png'
import rec3 from '../Assets/Rectangle 53.png'
import rec4 from '../Assets/Rectangle 65 (1).png'
import rec5 from '../Assets/Rectangle 66 (1).png'
import { Link } from "react-router-dom";

const Nft = () => {
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
    <div className="max-w-[1740px] h-full font-monument-extended my-[20px] mx-auto p-4 px-[30px] lg:px-[40px] xl:px-[65px] flex flex-col items-center justify-center">
      <div className="relative w-full">
        <video
          ref={videoRef}
          className="w-full rounded-lg"
          poster={nft}
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
          <h1 className="text-[13px] lg:text-[9px] xl:text-[21px]">NFT ng</h1>
          <p className="text-[#737373] text-[9px] lg:text-[12px]">
            Identity and motion design
          </p>
        </div>
        <div className="sm:max-w-[500px] max-w-[320px] font-thin text-[10px]">
          NFT ng is a web3 community for NFT’s and web 3 enthusiasts, the aim of
          this project was to create awareness and unique value proposition,
          aimed at attracting potential members and attendees, Increase brand
          awareness and attract new users by showcasing the benefits and
          impactfullnes of NFT ng community, Enhance the platform's online
          presence and drive traffic to the NFT ng website.
        </div>
      </div>

      <div className="md:mt-[50px] flex flex-col w-full mt-[30px] ">
       
        <img src={web} alt="" />
        <div className="sm:max-w-[500px]  mt-6 md:mt-3  max-w-[320px] font-thin text-[10px]">
        The logo reflects the brand's emphasis on customization and personalization.
        </div>
      </div>
      <div className="md:mt-[50px] flex flex-col w-full mt-[30px] ">
        <div>
          <h1 className="my-3 text-[9px] md:text-[11px] ">Colors</h1>
        </div>
        <img src={color} alt="" />
        <div className="sm:max-w-[500px]  mt-6 md:mt-3  max-w-[320px] font-thin text-[10px]">
        The split-complimentary color scheme emphasizes the sense of progress,
        </div>
      </div>
     

      <div className="md:mt-[50px] w-full mt-[30px] gap-3 flex flex-col">
      <div>
          <h1 className="my-3 text-[9px] md:text-[11px] ">Styleframes</h1>
        </div>
        <div className="w-full">
          <img src={rec} alt="" className="w-full " />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
          <div className="w-full">
            <img src={rec2} alt="" className="w-full " />
          </div>
          <div className="w-full">
            <img src={rec3} alt="" className="w-full " />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
          <div className="w-full">
            <img src={rec4} alt="" className="w-full" />
          </div>
          <div className="w-full">
            <img src={rec5} alt="" className="w-full" />
          </div>
        </div>
      </div>

      <div className="my-6 flex justify-between w-full items-center">
        <div>
          <h1 onClick={scrollToTop} className="cursor-pointer hover:text-blue-500 transition-all duration-700 text-[10px] md:text-[15px]">
            Back to top
          </h1>
        </div>
        <div>
          <Link to="/bimble2" className="cursor-pointer hover:text-blue-500 transition-all duration-700 text-[10px] md:text-[15px]">
            Next Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nft;
