import { useState, useEffect, useRef, useCallback } from 'react';
import BrowserInteractionTime from 'browser-interaction-time';
import { activeInteractionTime } from '@/actions/Article';
import debounce from 'lodash.debounce';

export const useArticleInteraction = (userId:any, tagId:any, dispatch:any) => {
  const [interactionTime, setInteractionTime] = useState(0);

  useEffect(() => {
    const interactionTimeTracker = new BrowserInteractionTime({
      stopTimerOnTabchange: true,
      idleTimeoutMs: 30000,
    });

    interactionTimeTracker.startTimer();
    
    const updateInteractionTime = () => {
      const timeInMs = interactionTimeTracker.getTimeInMilliseconds();
      const timeInMinutes = Math.floor(timeInMs / (1000 * 60));
      setInteractionTime(timeInMinutes);
    };

    const intervalId = setInterval(updateInteractionTime, 1000);

    const sendInteractionTimeToBackend = (time:any) => {
      dispatch(activeInteractionTime({
        interactionTime: time,
        userId,
        tagId,
      }));
    };

    const cleanup = () => {
      clearInterval(intervalId);
      interactionTimeTracker.destroy();
      const currentInteractionTime = interactionTimeTracker.getTimeInMilliseconds() / (1000 * 60);
      sendInteractionTimeToBackend(currentInteractionTime);
    };

    window.addEventListener('beforeunload', cleanup);
    return () => {
      window.removeEventListener('beforeunload', cleanup);
      cleanup();
    };
  }, [userId, tagId, dispatch]);

  return interactionTime;
};
