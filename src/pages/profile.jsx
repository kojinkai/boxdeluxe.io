import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ProfileIndex = () => (
  <StaticQuery
    render={({
      allContentfulProfilePage: {
        nodes: [
          {
            profileBio: {
              name,
              childContentfulBiographySecondaryBioTextNode: { secondaryBio },
              childContentfulBiographyExtendedBioTextNode: { extendedBio },
            },
          },
        ],
      },
    }) => (
      <Layout>
        <SEO title="Profile" />
        <h1>Profile</h1>
        <div className="wrapper">
          <p>{name}</p>
          <p>{secondaryBio}</p>
          <p>{extendedBio}</p>
        </div>
      </Layout>
    )}
    query={graphql`
      query profileQuery {
        allContentfulProfilePage(limit: 1) {
          nodes {
            profileBio {
              name
              childContentfulBiographySecondaryBioTextNode {
                secondaryBio
              }
              childContentfulBiographyExtendedBioTextNode {
                extendedBio
              }
            }
          }
        }
      }
    `}
  />
);

export default ProfileIndex;
