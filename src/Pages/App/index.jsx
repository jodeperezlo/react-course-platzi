import { Navbar } from '../../Components/Navbar';
import { AppContextProvider } from '../../Context';
import AppRoutes from '../../Routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
