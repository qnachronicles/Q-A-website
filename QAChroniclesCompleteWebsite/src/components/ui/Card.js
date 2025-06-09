
import React from 'react';

export const Card = ({ children, className }) => {
  return <div className={`p-4 bg-white rounded-lg shadow ${className}`}>{children}</div>;
};

export const CardContent = ({ children }) => {
  return <div>{children}</div>;
};
