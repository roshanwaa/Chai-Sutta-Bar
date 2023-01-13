import { createElement } from 'react';
export const MenuSection = (props) => {
  const getContent = () => {
    return createElement(
      'div',
      { className: 'menu-section-content' },
      props.children
    );
  };

  return createElement(
    'div',
    { id: props.id, className: 'menu-section' },
    createElement(
      'div',
      { className: 'menu-section-title' },
      createElement('i', {
        className: props.icon,
      }),
      createElement(
        'span',
        { className: 'menu-section-title-text' },
        props.title
      )
    ),
    getContent()
  );
};
