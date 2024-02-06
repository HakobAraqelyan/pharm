import './App.scss';
import AppHeader from '../appHeader/AppHeader';
import Sidebar from '../sidebar/Sidebar';
import Appointments from '../appointments/Appointments';

function App() {
  return (
      <div className='app'>
        <AppHeader />
        <Sidebar />
        <Appointments />
      </div>
  );
}

export default App;
