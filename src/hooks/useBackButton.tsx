// useBackButton.ts
import { useEffect } from "react";

const useBackButton = () => {
  useEffect(() => {
    const handleBackButtonClick = () => {
      if (window.history.state === null) {
        window.history.back();
      }
    };

    window.addEventListener("popstate", handleBackButtonClick);

    return () => {
      window.removeEventListener("popstate", handleBackButtonClick);
    };
  }, []);
};

export default useBackButton;
