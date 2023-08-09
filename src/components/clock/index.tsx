'use client'
import { useEffect, useState } from 'react';
import { format } from 'date-fns';

export const Clock = () => {
  const [currentTime, setCurrentTime] = useState<string>('');
  useEffect(() => {
    const updateClock = () => {
      const currentDate = new Date();
      const formattedTime = format(currentDate, 'HH:mm');
      setCurrentTime(formattedTime);
    };
    updateClock();
    const intervalId = setInterval(updateClock, 60000); // Update every minute
    return () => clearInterval(intervalId);
  }, []);
  return <div>{currentTime}</div>;
}