import React, { useLayoutEffect, useState } from 'react'

interface DimensionsType {
  width: number;
  height: number;
}

const useWindowDimensions = () => {
  const [dimensions, setDimensions] = useState<DimensionsType>({
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", updateDimensions);
    updateDimensions();
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return dimensions;
}

export default useWindowDimensions;