import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
// import Image from '../components/image';
import SEO from '../components/seo';
import Hero from '../components/hero';
import EmploymentCard from '../components/employment-card';

const IndexPage = () => (
  <StaticQuery
    render={({
      allContentfulBiography: {
        nodes: [shortBio],
      },
      allContentfulEmploymentRole: {
        nodes: [currentRole],
      },
    }) => (
      <Layout>
        <SEO title="Home" />
        <Hero leadline={shortBio} />
        <EmploymentCard node={currentRole} />
      </Layout>
    )}
    query={graphql`
      query HomeQuery {
        allContentfulBiography(limit: 1) {
          nodes {
            name
            shortIntro
            title
          }
        }
        allContentfulEmploymentRole(limit: 1) {
          nodes {
            company
            role
            companyImage {
              file {
                url
              }
              description
            }
          }
        }
      }
    `}
  />
);

export default IndexPage;
