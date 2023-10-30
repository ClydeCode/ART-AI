import { createContext, useState } from 'react';
import RouterSwitch from './RouterSwitch';

export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <RouterSwitch />
      </UserContext.Provider>
    </div>
  );
}

export default App;
