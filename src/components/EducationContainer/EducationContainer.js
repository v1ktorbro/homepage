import './EducationContainer.css';
import React from 'react';
import EducationElementContainer from '../EducationElementContainer/EducationElementContainer';
import CurrentDataInfoContext from '../../context/CurrentDataInfoContext';

function EducationContainer() {
  const pageDataInfo = React.useContext(CurrentDataInfoContext);

  return (
    <div className='education-container'>
      <h2 className='education-container__title'>Education:&nbsp;</h2>
      <ul className='education-container__list'>
        {pageDataInfo.educationsLinks.map((contact, index) => {
          return (
            <EducationElementContainer 
              key={index}
              data={contact}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default EducationContainer;