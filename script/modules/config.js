const products = [
  {
    name: 'shirt',
    white: '$10',
    black: '$13',
  },
  {
    name: 'pillow',
    white: '$12',
    black: '$15',
  },
  {
    name: 'case',
    white: '$5',
    black: '$7',
  },
  {
    name: 'poster',
    white: '$3',
    black: '$5',
  }
];

const defaultState = {
  product: 'shirt',
  color: 'white',
  price: '$10'
};

export {
  products,
  defaultState
};