import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;
  //new
  margin-top: var(
    --nav-height
  ); /* Adjust var(--nav-height) to the height of your nav bar */
  position: relative;
  top: var(--nav-height); /* Adjust this value */ //new
  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;
    @media (max-width: 768px) {
      display: block;
      height: auto; //new
      padding-top: var(--nav-height); //new
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      &:before {
        content: "▹";
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'After Effects',
    'Illustrator',
    'Photoshop',
    'Audition',
    'Blender',
    'Unreal',
    'Figma',
    'Premiere Pro',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is Nic and I'm a linguistics enthusiast, devoted
              father, passionate educator, and a 10-year veteran of the motion
              design industry. In 2010, I graduated from{' '}
              <a href="https://www.wwu.edu/">Western Washington University</a>,
              with a degree in{' '}
              <a href="https://en.wikipedia.org/wiki/Linguistics">
                Linguistics
              </a>
              , a bunch of student debt, and no plan at all. After some rather
              unpleasant but character-building years as a nail polish inventory
              manager, a vitamin shipper, and a valet, I took a 2-month
              intensive dive into the world of{' '}
              <a href="https://www.adobe.com/products/aftereffects.html">
                After Effects
              </a>
              , and managed to land myself an internship at a local boutique
              design shop,{' '}
              <a href="https://www.crunchbase.com/organization/killer-infographics">
                Killer Infographics
              </a>
              .
            </p>
            <p>
              One year later I was a full-time motion designer, then a senior
              motion designer, then the Director of Education, overseeing
              continuing education, holding workshops on After Effects, hiring
              interns and mentoring students, and pioneering our first ever
              passion project initiative. Every one of my interns was hired in
              the design industry after completing their internships, and many
              of them were hired by our own company! The high school students I
              mentored went on to study at prestigious art programs around the
              world.
              {/* I managed to weather the storm of multiple acquisitions and mergers from 2021 onward, until June of 2023 when the motion department was effectively shut down. */}
            </p>
            <p>
              Around the same time, I was hired by Shoreline Community College
              to teach an Intro to After Effects class, as well as a
              Specializations class where students could pursue a topic of their
              choice for an entire quarter. My After Effects students went from
              complete novices to hireable motion designers in a matter of
              months, and I'm pleased to say{' '}
            </p>
            <p>
              I've worked in all phases of the motion design pipeline, including
              scripting, storyboarding, asset creation, voiceover recording,
              sound editing, animation, video editing, and project &amp; client
              management. So there ya have it. I've worked for a{' '}
              <a href="https://www.crunchbase.com/organization/killer-infographics">
                cute lil' boutique design shop
              </a>
              , a <a href="https://www.materialplus.io/">global media corp</a>,
              and a{' '}
              <a href="https://www.shoreline.edu/">
                small-but-courageous community college
              </a>
              . My priority these days is paying my mortgage and my daughter's
              daycare...
            </p>

            <p>Here are a few programs I work with:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.png"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
