import { createElement } from 'react';
import { MenuSection } from './MenuSection';

export const MenuContent = () => {
  const getRestaurants = () => {
    return [
      {
        desc: 'Cuddle the Kulhad',
        id: 1,
        image:
          'https://images.unsplash.com/photo-1623671100816-fa8bc447e37c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM5fHxjaGFpJTIwdGVhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        title: 'Chai',
      },
      {
        desc: 'Stressed, Blessed with Coffee Obsessed',
        id: 2,
        image:
          'https://images.unsplash.com/photo-1588652737648-640758421c3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        title: 'Hot Coffee',
      },
      {
        desc: 'Icy Connection ❤',
        id: 3,
        image:
          'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
        title: 'Cold Coffee',
      },
      {
        desc: 'The Cheesy Circle of Life.',
        id: 4,
        image:
          'https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        title: 'Pizza',
      },
      {
        desc: 'A Flirty Delight',
        id: 5,
        image:
          'https://images.unsplash.com/photo-1606131731446-5568d87113aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        title: 'Burgers',
      },
      {
        desc: 'Thrilled on Grilled',
        id: 6,
        image:
          'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80',
        title: 'Sandwiches',
      },
      {
        desc: 'Magical Happiness, Cheesy Joy',
        id: 7,
        image:
          'https://images.unsplash.com/photo-1583331030528-5ae1c7fb81ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        title: 'Pasta',
      },
      {
        desc: 'A Stubborn Relationship , Never Fails!',
        id: 8,
        image:
          'https://images.unsplash.com/photo-1602833280958-1657662ccc58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
        title: 'Maggie',
      },
      {
        desc: 'Crispy Supremacy, Unique Galore!',
        id: 9,
        image:
          'https://images.unsplash.com/photo-1515467529252-d8f02a46e731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80',
        title: 'Bites',
      },
      {
        desc: 'A Celebration of your Living',
        id: 10,
        image:
          'https://c.ndtvimg.com/2022-03/ctj2ujv8_corns_625x300_29_March_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350',
        title: 'Healthy Feast ',
      },
      {
        desc: 'When Life gets Tough, Shake it, Live Love. Milkshakes',
        id: 11,
        image:
          'https://images.unsplash.com/photo-1496767849887-3d30e6d3e860?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        title: 'Milk Shakes',
      },
      {
        desc: "It's Plain to see, We're Mint to be, Blurred limes",
        id: 12,
        image:
          'https://images.unsplash.com/photo-1506624852095-49f2f713e1dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        title: 'Mojito',
      },
      {
        desc: 'Squeeze the DAY!',
        id: 13,
        image:
          'https://images.unsplash.com/photo-1574571791847-06514225b338?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=862&q=80',
        title: 'Masala Lemon',
      },
      {
        desc: 'Icy Delicious, Iced Happiness',
        id: 14,
        image:
          'https://images.unsplash.com/photo-1634641135604-94df2bd6d3d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=748&q=80',
        title: 'Ice Tea',
      },
      {
        desc: 'Sip, Sip, Hooray! A Fruity get-away',
        id: 15,
        image:
          'https://images.unsplash.com/photo-1457518919282-b199744eefd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
        title: 'Ice Crusher',
      },
    ].map((restaurant) => {
      const styles = {
        backgroundImage: `url(${restaurant.image})`,
      };
      return createElement(
        'div',
        {
          key: restaurant.id,
          className: 'restaurant-card background-image',
          style: styles,
        },
        createElement(
          'div',
          { className: 'restaurant-card-content' },
          createElement(
            'div',
            { className: 'restaurant-card-content-items' },
            createElement(
              'span',
              { className: 'restaurant-card-title' },
              restaurant.title
            ),
            createElement(
              'span',
              { className: 'restaurant-card-desc' },
              restaurant.desc
            )
          )
        )
      );
    });
  };

  return createElement(
    MenuSection,
    {
      icon: 'icon-chai fa-solid fa-mug-hot',
      id: 'restaurants-section',
      title: 'Menu',
    },
    getRestaurants()
  );
};
