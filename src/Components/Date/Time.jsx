import { createElement } from 'react';
import useCurrentDateEffect from './useCurrentDateEffect';
import './time.css';

const T = {
  format: (date) => {
    const hours = T.formatHours(date.getHours()),
      minutes = date.getMinutes();
    //   seconds = date.getSeconds();
    return `${hours}:${T.formatSegment(minutes)}`;
  },
  formatHours: (hours) => {
    return hours % 12 === 0 ? 12 : hours % 12;
  },
  formatSegment: (segment) => {
    return segment < 10 ? `0${segment}` : segment;
  },
};

const Time = () => {
  const date = useCurrentDateEffect();
  return createElement('span', { className: 'time' }, T.format(date));
};
export default Time;
