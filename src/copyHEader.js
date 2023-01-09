const { HashRouter, Switch, Route, Link, useRouteMatch } = ReactRouterDOM;

const navbarStyle = {
  width: 75,
  height: 600,
};
const routesList = ['food', 'drinks', 'desserts', 'vegan'];

const initialBubbleConfig = {
  startingCurve: 10,
  middleCurve: 20,
  height: 100,
  width: 20,
};

const svgPath = (navbar, startingPoint, bubble) => {
  const x = navbar.width;
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

function Navbar() {
  const [selected, onSelect] = React.useState('drinks');
  const [bubble, setBubbleAnimation] = React.useState(initialBubbleConfig);
  const [verticalPosition, setVerticalPosition] = React.useState({ y: 150 });

  const optionsList = React.useRef(null);

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

  React.useEffect(() => {
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
      <svg class="navbar__background" height="100%">
        <path
          fill="#9966FF"
          d={svgPath(navbarStyle, verticalPosition.y, bubble)}
        />
      </svg>
    </div>
  );
}

function FoodComponent() {
  return (
    <div className="view-layout">
      <h2 className="title">Food</h2>
      <div className="box-placeholder small"></div>
      <div className="box-placeholder"></div>
      <div className="box-placeholder"></div>
    </div>
  );
}

function DrinksComponent() {
  return (
    <div className="view-layout">
      <h2 className="title">Drinks</h2>
      <div className="box-placeholder small"></div>
      <div className="box-placeholder"></div>
      <div className="box-placeholder"></div>
    </div>
  );
}

function DessertsComponent() {
  return (
    <div className="view-layout">
      <h2 className="title">Desserts</h2>
      <div className="box-placeholder small"></div>
      <div className="box-placeholder"></div>
      <div className="box-placeholder"></div>
      <div className="box-placeholder"></div>
    </div>
  );
}

function VeganComponent() {
  return (
    <div className="view-layout">
      <h2 className="title">Vegan</h2>
      <div className="box-placeholder small"></div>
      <div className="box-placeholder"></div>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <div className="container">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <DrinksComponent />
          </Route>

          <Route path="/food">
            <FoodComponent />
          </Route>

          <Route exact path="/drinks">
            <DrinksComponent />
          </Route>

          <Route exact path="/desserts">
            <DessertsComponent />
          </Route>

          <Route exact path="/vegan">
            <VeganComponent />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
