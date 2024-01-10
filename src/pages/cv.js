import React from 'react';
import { Helmet } from 'react-helmet';
import { Layout } from '@components';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledJobsSection = styled.section`
  margin-left: 8vw;
  margin-right: 8vw;
  margin-top: 8vh;
  max-width: 700px;

  .inner {
    display: column;

    @media (max-width: 600px) {
      display: block;
    }
  }
`;

const StyledCompany = styled.span`
  color: var(--green); // Use your theme's green color variable
`;

const StyledJob = styled.div`
  margin-bottom: 1em;
`;

const CVPage = ({ location }) => {
  CVPage.propTypes = {
    location: PropTypes.object,
  };
  const data = useStaticQuery(graphql`
    query {
      jobs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/cv/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              company
              location
              range
              url
            }
            html
          }
        }
      }
    }
  `);
  const jobsData = data.jobs.edges; // Assuming jobs is the correct query name

  return (
    <Layout location={location}>
      <Helmet title="CV" />
      <StyledJobsSection>
        <header>
          <h2 className="spacer"> </h2>
        </header>
        <header>
          <h2 className="big-heading">Nic Hartmann</h2>
          <h3 className="heading">Curriculum Vitae</h3>
        </header>
        <div className="inner">
          {jobsData.map(({ node }, i) => {
            const { frontmatter, html } = node;
            return (
              <StyledJob key={i}>
                <h3>
                  {frontmatter.title} @{' '}
                  <StyledCompany>{frontmatter.company}</StyledCompany>
                </h3>
                <p className="range">{frontmatter.range}</p>
                <div dangerouslySetInnerHTML={{ __html: html }} />
              </StyledJob>
            );
          })}
        </div>
      </StyledJobsSection>
    </Layout>
  );
};

export default CVPage;
