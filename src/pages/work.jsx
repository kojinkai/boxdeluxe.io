import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import EmploymentCard from '../components/employment-card';

const WorkIndex = () => (
  <StaticQuery
    render={({
      allContentfulWorkPage: {
        nodes: [{ pageHeadline, employmentRoles }],
      },
    }) => (
      <Layout>
        <SEO title="Profile" />
        <div className="wrapper">
          <h1>{pageHeadline}</h1>
          {employmentRoles.map(({ id, ...rest }) => (
            <EmploymentCard key={id} node={rest} />
          ))}
        </div>
      </Layout>
    )}
    query={graphql`
      query workQuery {
        allContentfulWorkPage {
          nodes {
            pageHeadline
            employmentRoles {
              technologyUsed
              duties
              id
              company
              companyImage {
                file {
                  url
                }
              }
            }
          }
        }
      }
    `}
  />
);

export default WorkIndex;
