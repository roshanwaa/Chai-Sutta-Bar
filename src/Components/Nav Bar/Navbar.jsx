import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as dynamics from 'https://cdn.skypack.dev/dynamics.js@1.1.5';
import './Navbar.css';
const navbarStyle = {
  width: 75,
  height: 600,
};
const routesList = ['home', 'menu', 'about', 'contact'];

const initialBubbleConfig = {
  startingCurve: 10,
  middleCurve: 20,
  height: 100,
  width: 20,
};

const svgPath = (navbar, startingPoint, bubble) => {
  return `
        M 0 0
        L ${navbar.width} 0
        L ${navbar.width} ${navbar.width}
        L ${navbar.width} ${startingPoint}
        C ${navbar.width},
        ${bubble.startingCurve + startingPoint} ${navbar.width + bubble.width},
        ${bubble.height / 2 + startingPoint - bubble.middleCurve} ${
    navbar.width + bubble.width
  },
        ${bubble.height / 2 + startingPoint} ${navbar.width + bubble.width},
        ${bubble.height / 2 + startingPoint + bubble.middleCurve} ${
    navbar.width
  },
        ${startingPoint + bubble.height - bubble.startingCurve} ${navbar.width},
        ${startingPoint + bubble.height}
        L ${navbar.width} 300
        L ${navbar.width} ${navbar.height}
        L 0 ${navbar.height}
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
          fill="#243763"
          d={svgPath(navbarStyle, verticalPosition.y, bubble)}
        />
      </svg>
    </div>
  );
};
