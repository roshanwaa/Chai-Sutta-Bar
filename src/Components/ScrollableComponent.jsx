import { useState, useRef, createElement } from 'react';

const defaultPosition = () => ({
  left: 0,
  x: 0,
});

export const ScrollableComponent = (props) => {
  const ref = useRef(null);
  const [state, setStateTo] = useState({
    grabbing: false,
    position: defaultPosition(),
  });
  const handleOnMouseDown = (e) => {
    setStateTo(
      Object.assign(Object.assign({}, state), {
        grabbing: true,
        position: {
          x: e.clientX,
          left: ref.current.scrollLeft,
        },
      })
    );
  };
  const handleOnMouseMove = (e) => {
    if (state.grabbing) {
      const left = Math.max(
        0,
        state.position.left + (state.position.x - e.clientX)
      );
      ref.current.scrollLeft = left;
    }
  };
  const handleOnMouseUp = () => {
    if (state.grabbing) {
      setStateTo(Object.assign(Object.assign({}, state), { grabbing: false }));
    }
  };
  return createElement(
    'div',
    {
      ref: ref,
        // className: classNames('scrollable-component', props.className),
      id: props.id,
      onMouseDown: handleOnMouseDown,
      onMouseMove: handleOnMouseMove,
      onMouseUp: handleOnMouseUp,
      onMouseLeave: handleOnMouseUp,
    },
    props.children
  );
};
