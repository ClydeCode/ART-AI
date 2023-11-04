import { createContext, useState } from 'react';
import RouterSwitch from './RouterSwitch';
import { UserContextProvider } from './contexts/UserContext';

function App() {
  return (
    <div>
      <UserContextProvider>
        <RouterSwitch />
      </UserContextProvider>
    </div>
  );
}

export default App;
