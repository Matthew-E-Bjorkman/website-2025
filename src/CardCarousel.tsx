import React, { useState, useRef, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import { Circle } from "@mui/icons-material";

interface CardCarouselProps {
  cards: React.ReactNode[];
}

const CardCarousel = ({ cards }: CardCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);

  const handleDotClick = (index: number) => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scrollPosition = index * container.clientHeight;

    setActiveIndex(index);
    container.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (!containerRef.current || isScrolling.current) return;

    const container = containerRef.current;
    const scrollPosition = container.scrollTop;
    const newIndex = Math.round(scrollPosition / container.clientHeight);

    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling.current) return;
      isScrolling.current = true;

      const delta = Math.sign(e.deltaY);
      const newIndex = Math.min(
        Math.max(activeIndex + delta, 0),
        cards.length - 1,
      );

      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
        container.scrollTo({
          top: newIndex * container.clientHeight,
          behavior: "smooth",
        });
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 250);
    };

    container.addEventListener("wheel", handleWheel);
    return () => container.removeEventListener("wheel", handleWheel);
  }, [activeIndex, cards.length]);

  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        width: "100%",
      }}
    >
      <Box
        ref={containerRef}
        onScroll={handleScroll}
        sx={{
          height: "100%",
          width: "100%",
          overflowY: "auto",
          scrollSnapType: "y mandatory",
          "& > *": {
            scrollSnapAlign: "start",
          },
        }}
      >
        {cards.map((card, index) => (
          <Box
            key={index}
            sx={{
              height: "100%",
              width: "100%",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {card}
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          position: "absolute",
          right: "5%",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: 1,
          zIndex: 1,
        }}
      >
        {cards.map((_, index) => (
          <IconButton
            key={index}
            onClick={() => handleDotClick(index)}
            sx={{ p: 0.5 }}
          >
            <Circle
              sx={{
                fontSize: "0.75rem",
                color:
                  activeIndex === index
                    ? "var(--text-primary)"
                    : "var(--header-background)",
                transition: "color 0.3s ease",
                filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.2))",
              }}
            />
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};

export default CardCarousel;
