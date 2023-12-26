import React, { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const VideoComponent = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer hook to track visibility of the component
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    };

    const observer = new IntersectionObserver(handleIntersection);

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current.play().catch((error) => {
        // Handle play error, if any
        console.error("Error playing video:", error);
      });
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [isVisible]);

  return (
    <div className=" md:mt-0 mt-10 md:mb-12 lg:mb-16 px-4" ref={ref}>
      <video
        className="mx-auto rounded-xl"
        ref={videoRef}
        src="https://res.cloudinary.com/duzyskhf5/video/upload/v1685382297/pixels_wudh2a.mp4"
        controls
        width="640"
        height="360"
      />
    </div>
  );
};

export default VideoComponent;
