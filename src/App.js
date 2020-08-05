import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-responsive-modal/styles.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';

import './App.css';

function App() {
    return (
        <div className='App'>
            <Navbar />
            <Cards />
        </div>
    );
}
export default App;
