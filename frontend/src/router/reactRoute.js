import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/header';
import About from './../screens/about';
import HomeScreen from './../screens/homeScreen';
import '../../src/styles/react-router-style/react-router-style.css'


const ReactRouter = () => (
    <div>
        <Router>
            <Header />
            {/* <div style={{background: "red", width: "100%", height: "200px"}}> */}
            <div className='routsContainer'>
                <Routes>
                    <Route exact path='/' element={<HomeScreen />} />
                    <Route exact path='/about' element={<About />} />
                </Routes>
            </div>
        </Router>
    </div>
)

export default ReactRouter;