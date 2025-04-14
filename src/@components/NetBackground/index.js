import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";

import styles from "./index.module.css";
import * as C from "@components";

export const NetBackground = () => {
  const vantaRef = useRef(null);
  const effectRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (effectRef.current) {
      effectRef.current.destroy();
      effectRef.current = null;
    }

    if (!vantaEffect && window.VANTA && window.VANTA.NET) {
      effectRef.current = window.VANTA.NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        scale: 1.5,
        zoom: 1.5,
        scaleMobile: 1.3,
        backgroundColor: 0x0d1424,
        color: "salmon",
      });
    }

    return () => {
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, []);

  return (
    <C.OuterContent className={clsx(styles.NetBackground)}>
      <div className={clsx(styles.NetBackground_content)} ref={vantaRef} />
    </C.OuterContent>
  );
};

export default NetBackground;
