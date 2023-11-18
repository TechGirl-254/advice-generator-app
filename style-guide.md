# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Light Cyan: hsl(193, 38%, 86%)
- Neon Green: hsl(150, 100%, 66%)

### Neutral

- Grayish Blue: hsl(217, 19%, 38%)
- Dark Grayish Blue: hsl(217, 19%, 24%)
- Dark Blue: hsl(218, 23%, 16%)

## Typography

### Body Copy

- Font size (quote): 28px

### Font

- Family: [Manrope](https://fonts.google.com/specimen/Manrope)
- Weights: 800


.icon {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 330px;
    width: 60px;
    height: 60px;
    background-color: hsl(150, 100%, 66%);
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
  }
  
  .icon button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }
  
  .icon.clicked {
    transform: scale(1.1) rotate(220deg);
    transition: transform 0.5s ease;
  }