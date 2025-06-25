import { useState } from 'react';
import { log } from './log.js';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import CoinfireCounter from './components/Counter/ConfigureCounter.jsx';

function App() {
  log('<App /> rendered');
  const [chosenCount, setChosenCount] = useState(0);

  function hanldeSetCount(newCount) {
    setChosenCount(newCount);
  }

  return (
    <>
      <Header />
      <main>
        <CoinfireCounter onSet={hanldeSetCount}/>
        <Counter initialCount={chosenCount} />
        <Counter initialCount={0} />
      </main>
    </>
  );
}

export default App;
