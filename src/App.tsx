import React, { useState } from 'react';
import Metron from './metron';
import Tokyo from './tokyo';

function App() {
  const DashboardTheme = curTheme
  const [currentProject, setCurrentProject] = useState(DashboardTheme);
  return (
    <>
      {currentProject === 'metron' ?
        <Metron />
        : currentProject === 'tokyo' ? <Tokyo />
          : <Metron />}

    </>
  );
}

export default App;

const curTheme = 'tokyo'
// const curTheme = 'metron'
export { curTheme }