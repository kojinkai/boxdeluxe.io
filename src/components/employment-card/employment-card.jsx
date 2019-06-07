import React from 'react';
import { employmentCardPropType } from '../../prop-types';

const EmploymentCard = ({
  node: {
    company,
    role,
    companyImage: {
      file: { url },
      description,
    },
    technologyUsed,
    duties,
  },
}) => (
  <div>
    <h2>{company}</h2>
    <div>{role}</div>
    <img src={url} alt={description} />
    {duties && <div>{duties}</div>}
    {technologyUsed && (
      <div>
        {technologyUsed.map(technology => (
          <p key={technology}>{technology}</p>
        ))}
      </div>
    )}
  </div>
);

EmploymentCard.propTypes = {
  node: employmentCardPropType.isRequired,
};

export default EmploymentCard;
