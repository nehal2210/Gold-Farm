import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/header';
import About from './../screens/about';
import HomeScreen from './../screens/homeScreen';
import Pool from '../screens/pool';
import PositionDetails from '../screens/position-details'
import '../../src/styles/react-router-style/react-router-style.css'







const ReactRouter = (props) => (
    <div>
        {console.log(props)}
        <Router>
            <Header network={props.networkId}/>
            {/* <div style={{background: "red", width: "100%", height: "200px"}}> */}
            <div className='routsContainer'>
                <Routes>
                    <Route exact path='/' element={<HomeScreen connectWallet = {props.connectWallet} currentAccount={props.currentAccount}/>} />
                    <Route exact path='/about' element={<About />} />
                    <Route exact path='/position-details' element={<PositionDetails />} />
                    <Route exact path='/pool' element={<Pool connectWallet = {props.connectWallet} currentAccount={props.currentAccount}/>} />
                </Routes>
            </div>
        </Router>
    </div>
)

export default ReactRouter;