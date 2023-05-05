import { Navbar } from '../../Components/Navbar';
import AppRoutes from '../../Routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
