import './App.css';
import { Header, Sidebar } from './components';
import { Dashboard } from './pages';

function App() {
  return (
    <div className="dashboard">
      <Header />
      
      <div className="dashboard-body">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;

