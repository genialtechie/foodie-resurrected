import React, { useState, useEffect } from 'react';

export const StatusContext = React.createContext();

export const StatusProvider = ({ children }) => {
  const [status, setStatus] = useState('Closed');

  useEffect(() => {
    // get the current date, day, and time
    const date = new Date();
    const day = date.getDay();
    const hour = date.getHours();

    // Check the current day and time, and update the status accordingly
    if ((day === 3 || day === 4 || day === 5) && hour >= 16 && hour < 22) {
      setStatus('Open');
    } else if (day === 0 && hour >= 12 && hour < 22) {
      setStatus('Open');
    }
  }, []);

  return (
    <StatusContext.Provider value={status}>{children}</StatusContext.Provider>
  );
};
