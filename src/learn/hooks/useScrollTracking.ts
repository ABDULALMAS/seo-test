import { useState, useCallback, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { sendScrollPositionToBackend } from '@/actions/Article';

export const useScrollTracking = (userId:any, tagId:any, dispatch:any) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollPosition(window.scrollY);
    setScrollHeight(document.documentElement.scrollHeight);
  }, []);

  const debouncedHandleScroll = useCallback(
    debounce(handleScroll, 100),
    [handleScroll]
  );

  const debouncedSendScrollPosition = useCallback(
    debounce(() => {
      dispatch(sendScrollPositionToBackend({
        scrollPosition,
        scrollHeight,
        userId,
        tagId,
      }));
    }, 2000),
    [scrollPosition, scrollHeight, dispatch, userId, tagId]
  );

  useEffect(() => {
    window.addEventListener('scroll', debouncedHandleScroll);
    return () => window.removeEventListener('scroll', debouncedHandleScroll);
  }, [debouncedHandleScroll]);

  useEffect(() => {
    const timer = setTimeout(debouncedSendScrollPosition, 2000);
    return () => clearTimeout(timer);
  }, [scrollPosition, debouncedSendScrollPosition]);

  return { scrollPosition, scrollHeight };
};