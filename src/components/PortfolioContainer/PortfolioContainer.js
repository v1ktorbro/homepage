import './PortfolioContainer.css';
import React from 'react';
import CurrentDataInfoContext from '../../context/CurrentDataInfoContext';
import PortfolioElemContainer from '../PortfolioElemContainer/PortfolioElemContainer';

function PortfolioContainer() {
  const pageDataInfo = React.useContext(CurrentDataInfoContext);

  return (
    <div className='portfolio-container'>
      <h2 className='portfolio-container__title'>Portfolio:</h2>
      <ol className={`portfolio-container__list`}>
        {pageDataInfo.portfolio.map((itemList, index) => {
          return (
            <PortfolioElemContainer
              key={index}
              data={itemList}
            />
          );
        })}
      </ol>
    </div>
  );
}
export default PortfolioContainer;