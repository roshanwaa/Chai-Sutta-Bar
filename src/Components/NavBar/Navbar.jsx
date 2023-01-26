/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as dynamics from 'dynamics.js';
import './Navbar.css';

const navbarStyle = {
  width: 70,
  height: 7000,
};
const routesList = ['home', 'menu', 'about', 'contact'];

const initialBubbleConfig = {
  startingCurve: 10,
  middleCurve: 20,
  height: 100,
  width: 20,
};

const svgPath = (navbar, startingPoint, bubble) => {
  const navbarWidth = navbar.width;
  const bubbleWidth = bubble.width;
  const bubbleHeight = bubble.height;
  const navbarHeight = navbar.height;
  const bubbleMiddleCurve = bubble.middleCurve;
  const bubbleStartingCurve = bubble.startingCurve;

  return `
        M 0 0
        L ${navbarWidth} 0
        L ${navbarWidth} ${navbarWidth}
        L ${navbarWidth} ${startingPoint}
        C ${navbarWidth},
        ${bubbleStartingCurve + startingPoint} ${navbarWidth + bubbleWidth},
        ${bubbleHeight / 2 + startingPoint - bubbleMiddleCurve} ${
    navbarWidth + bubbleWidth
  },
        ${bubbleHeight / 2 + startingPoint} ${navbarWidth + bubbleWidth},
        ${bubbleHeight / 2 + startingPoint + bubbleMiddleCurve} ${navbarWidth},
        ${startingPoint + bubbleHeight - bubbleStartingCurve} ${navbarWidth},
        ${startingPoint + bubbleHeight}
        L ${navbarWidth} 300
        L ${navbarWidth} ${navbarHeight}
        L 0 ${navbarHeight}
        Z`;
};

export const Navbar = () => {
  const [selected, onSelect] = useState('home');
  const [bubble, setBubbleAnimation] = useState(initialBubbleConfig);
  const [verticalPosition, setVerticalPosition] = useState({ y: 150 });

  const optionsList = useRef(null);

  // should return the vertical position with bubble centered
  const getVerticalPosition = (listElement, bubbleConfig) => {
    const textLength = listElement.getBoundingClientRect().height;
    const middlePointPosition = listElement.offsetTop + textLength / 2;
    return middlePointPosition - bubbleConfig.height / 2;
  };

  const performBubbleAnimation = (selectedElement, currentBubble) => {
    const bubbleMiddleState = {
      startingCurve: 20,
      middleCurve: 30,
      height: 120,
      width: -10,
    };

    dynamics.animate(currentBubble, bubbleMiddleState, {
      type: dynamics.spring,
      duration: 150,
      frequency: 100,
      friction: 300,
      change: (animation, progress) => {
        if (selected === selectedElement) {
          setBubbleAnimation(animation);
          if (progress === 1) {
            dynamics.animate(bubbleMiddleState, initialBubbleConfig, {
              type: dynamics.spring,
              duration: 600,
              frequency: 75,
              friction: 100,
              change: (animation) => {
                if (selected === selectedElement) {
                  setBubbleAnimation(animation);
                }
              },
            });
          }
        }
      },
    });
  };

  const performVerticalAnimation = (
    selectedElement,
    currentPosition,
    toPosition
  ) => {
    dynamics.animate(currentPosition, toPosition, {
      type: dynamics.spring,
      duration: 800,
      frequency: 75,
      change: (element) => {
        if (selected === selectedElement) {
          setVerticalPosition({ y: element.y });
        }
      },
    });
  };

  useEffect(() => {
    const selectedElement = document.getElementById(`route-${selected}`);
    if (selectedElement) {
      const currentPosition = Object.assign({}, verticalPosition);
      const bubbleConfig = Object.assign({}, bubble);
      const toPosition = getVerticalPosition(selectedElement, bubbleConfig);
      performVerticalAnimation(selected, currentPosition, { y: toPosition });
      performBubbleAnimation(selected, bubbleConfig);
    }
  }, [selected]);

  const renderRoutes = () => {
    return routesList.map((option) => {
      return (
        <li
          id={`route-${option}`}
          className={`navbar__option ${selected === option ? 'selected' : ''}`}
          onClick={() => onSelect(option)}
        >
          <Link to={'/' + option}>{option}</Link>
        </li>
      );
    });
  };

  return (
    <div className="navbar">
      <ul className="navbar__list" ref={optionsList}>
        {renderRoutes()}
      </ul>
      <svg className="navbar__background" height="100%">
        <path
          fill="#144272"
          d={svgPath(navbarStyle, verticalPosition.y, bubble)}
        />
      </svg>
    </div>
  );
};
