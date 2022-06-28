import './Main.css';
import React from "react";
import CurrentDataInfoContext from '../../context/CurrentDataInfoContext';
import PortfolioContainer from '../PortfolioContainer/PortfolioContainer';
import { CurrentThemeContext } from '../../context/CurrentThemeContext';

function Main() {
  const pageDataInfo = React.useContext(CurrentDataInfoContext);
  const theme = React.useContext(CurrentThemeContext);
  return (
    <main className='main'>
      <h1 className='main__title'>{pageDataInfo.name}</h1>
      <h2 className={`main__subtitle main__subtitle_profession`}>{pageDataInfo.profession}</h2>
      <h2 className={`main__subtitle main__subtitle_stack`}>
        Stack:&nbsp;<span className='main__subtitle-text-elem'>{pageDataInfo.stack}</span>
      </h2>
      <PortfolioContainer />
      <h2 className={`main__subtitle main__subtitle_education`}>Education:&nbsp;
        <a href={pageDataInfo.educationLink} className={`main__subtitle-text-elem main__subtitle-text-elem_link`} target={'_blank'} rel="noreferrer">
          <span className={`portfolio-elem-container__image-open-page portfolio-elem-container__image-open-page_theme-${theme}`} />Yandex.Practicum.
        </a>
      </h2>
      {/* контейнер */}
    </main>
  );
}

export default Main;