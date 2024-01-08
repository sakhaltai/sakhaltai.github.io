import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const StyledThumbnail = styled.div`
  position: relative;
  width: 100%; // Adjust as needed
  max-width: 700px; // Adjust as needed
  margin-top: 50px;

  .thumbnail-link {
    display: inline-block;
    width: 100%;
    max-width: 700px;
    border-radius: var(--border-radius);
  }

  .thumbnail-image {
    width: 100%;
    height: auto;
    border-radius: var(--border-radius);
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px var(--navy-shadow);
    }
  }

  .overlay-text {
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: white;
    font-size: var(--fz-lg);
    font-weight: 600;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const imageData = useStaticQuery(graphql`
    query {
      thumbnailImage: file(
        relativePath: { eq: "coverFeaturedDemoReel2024.png" }
      ) {
        childImageSharp {
          gatsbyImageData(
            width: 700
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);

  const image = getImage(
    imageData.thumbnailImage.childImageSharp.gatsbyImageData,
  );

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Nic Hartmann.</h2>;
  const three = (
    <h3 className="big-heading">
      I animate. I teach. <br></br>I (don't) sleep.
    </h3>
  );
  const four = (
    <>
      <p>
        I'm a high-octane, down-to-earth, humble, badass motion designer,
        focused on narrative-driven, clean-transitioning, eye-catching motion
        graphics, with over 10 years of experience in After Effects,
        Illustrator, and more. I also{' '}
        <a
          href="https://www.youtube.com/playlist?list=PLO0g83JdlVkFyl5QYNS0kna97EJpGPniv"
          target="_blank"
          rel="noopener noreferrer"
        >
          teach After Effects!
        </a>
      </p>
    </>
  );

  const five = (
    <StyledThumbnail>
      <a
        href="https://youtu.be/_e67KG1zSmA"
        className="thumbnail-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Watch Demo Reel 2024"
      >
        <GatsbyImage
          image={image}
          alt="Demo Reel 2024"
          className="thumbnail-image"
        />
        <div className="overlay-text">Demo Reel 2024</div>
      </a>
    </StyledThumbnail>
  );

  const items = [one, two, three, four, five]; // if wanted, include 'five' at the end of this list to bring back dat button :D

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
