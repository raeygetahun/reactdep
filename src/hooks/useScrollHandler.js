import { useEffect, useState } from "react";

const useScrollHandler = (targetClassName) => {
  const [isLineActive, setIsLineActive] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const targetElement = document.querySelector(`.${targetClassName}`);

      if (targetElement && !hasAnimated) {
        const targetElementTop = targetElement.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (targetElementTop <= windowHeight * 0.8) {
          setIsLineActive(true);
          setHasAnimated(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [targetClassName, hasAnimated]);

  return isLineActive;
};

export default useScrollHandler;
