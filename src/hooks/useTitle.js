// React
import { useEffect } from 'react';

const useTitle = (title) => {
  useEffect(() => {
    const originalTitle = document.title;
    const newTitle = title ? `${title} | ${originalTitle}` : originalTitle;

    document.title = newTitle;
    return () => (document.title = originalTitle);
  });
};

export default useTitle;
