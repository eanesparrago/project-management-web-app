import { useState } from "react";

function useHover() {
  const [isHovered, setIsHovered] = useState(false);

  function onHover() {
    setIsHovered(true);
  }

  function onHoverEnd() {
    setIsHovered(false);
  }

  return { isHovered, onHover, onHoverEnd };
}

export default useHover;
