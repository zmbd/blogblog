
import React, { useLayoutEffect, useState } from 'react'
import {throttle} from "lodash";

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
    let updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    
    updateDimensions = throttle(updateDimensions, 350);
    window.addEventListener("resize", updateDimensions);
    updateDimensions();
    return () => {
      window.removeEventListener("resize", updateDimensions);
    }
  }, []);

  return dimensions;
}

export default useWindowDimensions;