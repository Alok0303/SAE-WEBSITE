// src/App.jsx
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToHash from './components/ScrollToHash';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white overflow-x-hidden">
      <ScrollToHash />
      <Navbar />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
}

export default App;