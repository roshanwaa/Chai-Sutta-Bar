import { createElement } from 'react';
import { MenuContent } from './Menu/MenuContent';
import './CSS/Menu.css';

export const MenuComponent = () => {
  return createElement(
    'div',
    { id: 'app-menu', className: 'view-layout' },
    createElement(
      'div',
      { id: 'app-menu-content-wrapper' },
      createElement(
        'div',
        { id: 'app-menu-content' },
        createElement(MenuContent, null)
      )
    )
  );
};
