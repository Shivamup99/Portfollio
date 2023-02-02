import React from 'react';
import './App.css';
import Home from './components/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Portfollio from './components/portfollio/Portfollio';
import Testimollio from './components/testimollio/Testimollio';
import Contact from './components/contact/Contact';
import Service from './components/services/Service';
function App() {
  return (
    <div>
      <Sidebar/>
      <main className='main'>
        <Home/>
        <About/>
        <Resume/>
        <Service/>
        <Portfollio/>
        <Testimollio/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
