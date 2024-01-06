import { css } from 'styled-components';

const variables = css`
  :root {
    --dark-navy: #000000;
    --navy: #28043d;
    --light-navy: #2f1140;
    --lightest-navy: #392253;
    --navy-shadow: rgba(12, 2, 27, 0.7);
    --dark-slate: #59647a;
    --slate: #8892b0;
    --light-slate: #d3d5db;
    --lightest-slate: #dfe7ff;
    --white: #f5f5f5;
    --green: #64ffda;
    --green-tint: rgba(100, 255, 218, 0.1);
    --pink: #f57dff;
    --blue: #57cbff;
    --fart: #64ffda; // this is the new color for 'inlineLinkAlt', which is found in mixins.js, and featured.js

    --font-sans: "Calibre", sans-serif;
    --font-mono: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s,
      transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;

// old color values for reference
/*         
    --dark-navy: #210038; ()
    --navy: #0a192f;
    --light-navy: #ff00a0;
    --lightest-navy: #fe75fe;
    --navy-shadow: rgba(7, 0, 10, 1);
    --dark-slate: #495670;
    --slate: #ffffff;
    --light-slate: #f1f1f1;
    --lightest-slate: #f5f5f5;
    --white: #e6f1ff;
    --green: #64ffda;
    --green-tint: rgba(100, 255, 218, 0.1);
    --pink: #f57dff;
    --blue: #ff9f8e;
    --fart: #64ffda; // this is the new color for 'inlineLinkAlt', which is found in mixins.js, and featured.js */
