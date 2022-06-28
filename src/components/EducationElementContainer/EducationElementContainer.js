import './EducationElementContainer.css';
import React from 'react';
import PropTypes from 'prop-types'
import CurrentDataInfoContext from '../../context/CurrentDataInfoContext';
import { CurrentThemeContext } from '../../context/CurrentThemeContext';

function EducationElementContainer({ data }) {
  console.log(data);
  const theme = React.useContext(CurrentThemeContext);
  return (
    <li className={`education-element-container education-elem-container_theme-${theme}`}>
        <a href={data.link} className={`education-element-container__link education-element-container__link_theme-${theme}`} target={'_blank'} rel="noreferrer">
          <span className={`education-element-container__link-image education-element-container__link-image_theme-${theme}`} />{data.organisation}
        </a>
    </li>
  );
}

EducationElementContainer.propTypes = {
  data: PropTypes.object,
};

export default EducationElementContainer;