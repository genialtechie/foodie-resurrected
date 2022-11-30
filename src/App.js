import React from 'react';
import Home from './components/Home';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col h-full overflow-x-hidden">
      <Home />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
