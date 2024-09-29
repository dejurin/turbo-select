import { useEffect } from "preact/hooks";

export const useClickOutside = (ref: preact.RefObject<HTMLElement>, onClickOut: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!ref.current) {
        return;
      }

      const path = event.composedPath();
      if (!path.includes(ref.current)) {
        onClickOut();
      }
    };

    // Add the event listener for clicks
    document.addEventListener("click", handleClickOutside);

    return () => {
      // Cleanup event listener on unmount
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, onClickOut]);
};
