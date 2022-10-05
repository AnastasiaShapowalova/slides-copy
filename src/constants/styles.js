const STYLES = {
 COLORS: {
  accent: {
   name: 'accent',
   var: '--accent',
   defaultValue: '#00c0ff'
  },
  neutral: {
   name: 'neutral',
   var: '--neutral',
   defaultValue: '#374448'
  },
  white: {
   name: 'white',
   var: '--neutral',
   defaultValue: '#ffffff'
  },
  black: {
   name: 'black',
   var: '--neutral',
   defaultValue: '#000000'
  }
 },
 FONT_SIZES: {
  h1: { 
   name: 'h1',
   var: '--fs-h1',
   defaultValue: '48px'
  },
  h2: { 
   name: 'h2',
   var: '--fs-h2',
   defaultValue: '40px'
  },
  h3: { 
   name: 'h3',
   var: '--fs-h3',
   defaultValue: '32px'
  },
  h4: { 
   name: 'h4',
   var: '--fs-h4',
   defaultValue: '24px'
  },
  h5: { 
   name: 'h5',
   var: '--fs-h5',
   defaultValue: '20px'
  },
  h6: { 
   name: 'h6',
   var: '--fs-h6',
   defaultValue: '16px'
  },
  body1: { 
   name: 'body1',
   var: '--fs-body1',
   defaultValue: '16px'
  },
  body2: { 
   name: 'body2',
   var: '--fs-body2',
   defaultValue: '14px'
  },
  caption1: { 
   name: 'caption1',
   var: '--fs-caption1',
   defaultValue: '12px'
  },
  caption2: { 
   name: 'caption2',
   var: '--fs-caption2',
   defaultValue: '10px'
  },
 },
 LINE_HEIGHTS: {
  h1: { 
   name: 'h1',
   var: '--lh-h1',
   defaultValue: '72px'
  },
  h2: { 
   name: 'h2',
   var: '--lh-h2',
   defaultValue: '60px'
  },
  h3: { 
   name: 'h3',
   var: '--lh-h3',
   defaultValue: '48px'
  },
  h4: { 
   name: 'h4',
   var: '--lh-h4',
   defaultValue: '36px'
  },
  h5: { 
   name: 'h5',
   var: '--lh-h5',
   defaultValue: '30px'
  },
  h6: { 
   name: 'h6',
   var: '--lh-h6',
   defaultValue: '24px'
  },
  body1: { 
   name: 'body1',
   var: '--lh-body1',
   defaultValue: '24px'
  },
  body2: { 
   name: 'body2',
   var: '--lh-body2',
   defaultValue: '22px'
  },
  caption1: { 
   name: 'caption1',
   var: '--lh-caption1',
   defaultValue: '18px'
  },
  caption2: { 
   name: 'caption2',
   var: '--lh-caption2',
   defaultValue: '16px'
  },
 },
 TEXT_COLORS: {
  default: {
   name: 'default',
   var: '--text-default',
   defaultValue: 'var(--neutral)'
  },
  accent: {
   name: 'accent',
   var: '--text-accent',
   defaultValue: 'var(--accent)'
  },
  _options: [
   {
    name: 'accent',
    var: '--accent',
    value: 'var(--accent)'
   },
   {
    name: 'neutral',
    var: '--neutral',
    value: 'var(--neutral)'
   },
   {
    name: 'white',
    var: '--white',
    value: 'var(--white)'
   },
   {
    name: 'black',
    var: '--black',
    value: 'var(--black)'
   }
  ]
 },
 BACKGROUNDS: {
  primary: { 
   name: 'primary', 
   var: '--background-primary',
   defaultValue: 'var(--white)'
  },
  secondary: { 
   name: 'secondary',
   var: '--background-secondary',
   defaultValue: 'var(--accent)'
  },
  tetriary: { 
   name: 'tetriary', 
   var: '--background-tetriary',
   defaultValue: 'var(--neutral)'
  },
  _options: [
   {
    name: 'accent',
    var: '--accent',
    value: 'var(--accent)'
   },
   {
    name: 'neutral',
    var: '--neutral',
    value: 'var(--neutral)'
   },
   {
    name: 'white',
    var: '--white',
    value: 'var(--white)'
   },
   {
    name: 'black',
    var: '--black',
    value: 'var(--black)'
   }
  ]
 },
 SCREEN_BACKGROUNDS: {
  default: { 
   name: 'primary', 
   var: '--screen-bg-default',
   defaultValue: 'var(--screen-bg-default)'
  },
  accent: { 
   name: 'secondary', 
   var: '--screen-bg-accent',
   defaultValue: 'var(--accent)'
  },
  dark: { 
   name: 'tetriary', 
   var: '--screen-bg-dark',
   defaultValue: 'var(--neutral)'
  },
  _options: [
   {
    name: 'primary',
    var: '--screen-bg-default',
    value: 'var(--screen-bg-default)'
   },
   {
    name: 'secondary',
    var: '--screen-bg-secondary',
    value: 'var(--screen-bg-secondary)'
   },
   {
    name: 'tetriary',
    var: '--screen-bg-tetriary',
    value: 'var(--screen-bg-tetriary)'
   }
  ]
 }
}

export default STYLES