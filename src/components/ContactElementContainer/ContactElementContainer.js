import './ContactElementContainer.css';
import React from 'react';
import PropTypes from 'prop-types'
import { CurrentThemeContext } from '../../context/CurrentThemeContext';

function ContactElementContainer({ data }) {
  const theme = React.useContext(CurrentThemeContext);

  return (
    <li className={`contact-element-container contact-elem-container_theme-${theme}`}>
        <a href={data.link} className={`contact-element-container__link contact-element-container__link_theme-${theme}`} target={'_blank'} rel="noreferrer" >
          <span id={data.nameService} className={`contact-element-container__link-image contact-element-container__link-image_theme-${theme}`} />{data.value}
        </a>
    </li>
  );
}

ContactElementContainer.propTypes = {
  data: PropTypes.object,
};

export default ContactElementContainer;