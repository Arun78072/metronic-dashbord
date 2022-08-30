import React, { useState } from 'react';
import Metron from './metron';
import Tokyo from './tokyo';
import styled from 'styled-components';
import SettingsIcon from '@mui/icons-material/Settings';
function App() {
  const [currentProject, setCurrentProject] = useState('tokyo');
  return (
    <AppSection>
      <button className='theme_change'>
        <div className='options'>
          <button onClick={() => { setCurrentProject('metron') }} className={currentProject === 'metron' ? 'active' : ''}>Metron</button>
          <button onClick={() => { setCurrentProject('tokyo') }} className={currentProject === 'tokyo' ? 'active' : ''}>Tokyo</button>
        </div>
        <SettingsIcon />
      </button>
      {currentProject === 'metron' ?
        <Metron />
        : currentProject === 'tokyo' ? <Tokyo />
          : <Metron />}
    </AppSection>
  );
}

export default App;

const curTheme = 'tokyo'
// const curTheme = 'metron'
export { curTheme }
const AppSection = styled.section`
  button.theme_change {
    position: fixed;
    bottom: 34px;
    z-index: 9999;
    right: 34px;
  }
  .theme_change svg {
    color: #111632;
    background: #9470ee;
    border-radius: 50%;
    box-shadow: #ffffff6e 0px 0px 12px;
    padding: 10px;
    font-size: 50px;
    z-index: 9999;
  }
  .options {
    background: #fff;
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: flex-start;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    opacity:0;
    bottom: -10px;
    position: absolute;
    left: -6px;
    transition:all 0.5s;
    z-index: -1;
  }
  .theme_change:hover .options{
    opacity:1;
    bottom: 50px;
  }
  .options button {
    font-weight: 600;
    text-align: left;
  }
  .options button.active{
    color:#9970ff;
  }
`