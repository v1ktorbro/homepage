import './PortfolioElemContainer.css';
import React from 'react';
import PropTypes from 'prop-types';
import { CurrentThemeContext } from '../../context/CurrentThemeContext';

function PortfolioElemContainer({ data }) {
  const theme = React.useContext(CurrentThemeContext);
  return (
    <li className={`portfolio-elem-container portfolio-elem-container_theme-${theme}`}>
      <h3 className='portfolio-elem-container__title'>{data.title}</h3>
      <div className='portfolio-elem-container__btn-container'>
        <a href={data.webLink} className={`portfolio-elem-container__link portfolio-elem-container__link_theme-${theme}`} target={'_blank'} rel="noreferrer">
          <span className={`portfolio-elem-container__image-go portfolio-elem-container__image-go_theme-${theme}`} />Go
        </a>
        <a href={data.gitHubLink} className={`portfolio-elem-container__link ${data.gitHubLink ? '' : 'portfolio-elem-container__link_disabled'} portfolio-elem-container__link_theme-${theme}`} target={'_blank'} rel="noreferrer">
          <span className={`portfolio-elem-container__image-gitHub portfolio-elem-container__image-gitHub_theme-${theme}`} />GitHub
        </a>
      </div>
      {data.note && <p className='portfolio-elem-container__note'>&#42;{data.note}</p>}
    </li>
  );
}

PortfolioElemContainer.propTypes = {
  data: PropTypes.object,
};

export default PortfolioElemContainer;