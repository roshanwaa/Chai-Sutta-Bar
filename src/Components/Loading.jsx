import React from 'react';
import './Loading.css';
export const Loading = () => {
  return React.createElement(
    'div',
    { id: 'app-loading-icon' },
    React.createElement('i', { className: 'fa-solid fa-spinner-third' })
  );
};
