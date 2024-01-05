import { css } from 'styled-components';

const variables = css`
  :root {
    --dark-navy: #210038;
    --navy: #7a04eb;
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
    --fart: #2e2e2e; // this is the new color for 'inlineLinkAlt', which is found in mixins.js, and featured.js

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
/*     --dark-navy: #0 2 0 c 1 b;
    --navy: # 0 a 1 9 2 f;
    --light-navy: #1 1 2 2 4 0;
    --lightest-navy: #2 3 3 5 5 4;
    --navy-shadow: rgba(2, 12, 27, 0.7);
    --dark-slate: #4 9 5 6 7 0;
    --slate: #8 8 9 2 b 0;
    --light-slate: #a 8 b 2 d 1;
    --lightest-slate: #c c d 6 f 6;
    --white: #e 6 f 1 f f;
    --green: #6 4 f f d a;
    --green-tint: rgba(100, 255, 218, 0.1);
    --pink: #f 5 7 d f f;
    --blue: #5 7 c b f f; */
