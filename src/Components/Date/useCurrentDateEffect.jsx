import { useState, useEffect } from 'react';

const useCurrentDateEffect = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      const update = new Date();
      if (update.getSeconds() !== date.getSeconds()) {
        setDate(update);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [date]);

  return date;
};

export default useCurrentDateEffect;
