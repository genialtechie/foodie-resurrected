import React from 'react';
import Home from './components/Home';
import Menu from './components/Menu';
import Footer from './components/Footer';
import { StatusProvider } from './context/StatusContext';

function App() {
  return (
    <StatusProvider>
      <div className="flex flex-col h-full overflow-x-hidden">
        <Home />
        <Menu />
        <Footer />
      </div>
    </StatusProvider>
  );
}

export default App;
