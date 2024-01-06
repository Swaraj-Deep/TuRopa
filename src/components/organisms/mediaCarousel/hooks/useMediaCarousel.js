import { useCallback, useEffect, useState } from 'react';

function useMediaCarousel(maxMediaLength, autoScrollTimer = 5000) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleSelctedImageClick = useCallback((currentIndex) => {
    setSelectedImageIndex(currentIndex);
  }, []);

  const handleNextImageClick = useCallback(
    () =>
      setSelectedImageIndex((currImageIndex) =>
        currImageIndex === maxMediaLength - 1 ? 0 : currImageIndex + 1
      ),
    []
  );

  useEffect(() => {
    const interval = setTimeout(() => {
      handleNextImageClick();
    }, autoScrollTimer);

    return () => clearTimeout(interval);
  }, [selectedImageIndex]);

  return {
    selectedImageIndex,
    handleSelctedImageClick,
  };
}

export default useMediaCarousel;
