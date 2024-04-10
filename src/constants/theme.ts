import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

export const COLORS = {
  primary: '#f52d56',
  title: '#555555',
};

export const sizes = {
  h1: 25,
  h2: 20,
  h3: 18,
  h4: 16,
  h5: 14,
  h6: 12,

  width,
  height,
};
