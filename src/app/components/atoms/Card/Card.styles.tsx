import { CSSProperties } from 'react';

// Define types for CSS properties
type StyleMap = {
  [key: string]: CSSProperties;
};

// Styles for Card component
const cardStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0',
  position: 'absolute',
  width: '187px',
  height: '257px',
  left: 'calc(50% - 187px/2 - 94px)',
  top: '48px',
};

// Define other styles with CSSProperties
const imageContainerStyles: CSSProperties = {
  width: '187px',
  height: '187px',
  // Add other properties as needed
};

const imageStyles: CSSProperties = {
  position: 'absolute',
  width: '27.82px',
  height: '27.82px',
  left: '80px',
  top: '80px',
  // Add other properties as needed
};

const labelTextStyles: CSSProperties = {
  // Define properties for text elements
  // ...
};

// Add other styles with CSSProperties as needed

// Create a map of styles
const styles: StyleMap = {
  cardStyles,
  imageContainerStyles,
  imageStyles,
  labelTextStyles,
  // Add other styles to the map
};

export default styles;
