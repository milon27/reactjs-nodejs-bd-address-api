import React from 'react';

import MyRouter from './components/router/MyRouter'
import AppContext from './contexts/AppContext';

function App() {
  return (
    <AppContext>
      <MyRouter ></MyRouter>
    </AppContext>
  );
}

export default App;
