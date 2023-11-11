import RouterSwitch from './RouterSwitch';
import { UserContextProvider } from './contexts/UserContext';
import { SnackbarProvider } from './contexts/SnackbarContext';

function App() {
  return (
    <div>
      <UserContextProvider>
        <SnackbarProvider>
          <RouterSwitch />
        </SnackbarProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
