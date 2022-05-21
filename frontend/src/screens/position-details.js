import React from 'react';
import '../styles/position-details-style/position-details-style.css'


const PositionDetails = () => {
    return (
        <div className='main-container'>
            <div className='container'>
                <div className='first-box'>
                    <div className='first-box-header'>
                        <p className='heading'>Liquidity</p>
                    </div>
                    <div className='first-box-content'>
                        <p className='heading'>$-</p>
                        <div className='coin-details'>
                            <div className='coin-first-row'>
                                <div className='coin-first-column'>
                                    <img style={{ width: "30px", height: "30px" }} src='https://logos-download.com/wp-content/uploads/2019/01/Dai_Logo.svg' />
                                    <p>DAI</p>
                                    <p>/</p>
                                </div>
                                <div className='coin-second-column'>
                                    <p>81.21</p>
                                    <p>81.21</p>
                                </div>
                            </div>
                            <div className='coin-first-row'>
                                <div className='coin-first-column'>
                                    <img style={{ width: "30px", height: "30px" }} src='https://logos-download.com/wp-content/uploads/2019/01/Dai_Logo.svg' />
                                    <p>DAI</p>
                                    <p>/</p>
                                </div>
                                <div className='coin-second-column'>
                                    <p>81.21</p>
                                    <p>81.21</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='second-box'>sasa</div> */}


                <div className='first-box'>
                    <div className='first-box-header'>
                        <p className='heading'>Unclaimed fees</p>
                        <button>Collect fees</button>
                    </div>
                    <div className='first-box-content'>
                        <p className='heading'>$-</p>
                        <div className='coin-details'>
                            <div className='coin-first-row'>
                                <div className='coin-first-column'>
                                    <img style={{ width: "30px", height: "30px" }} src='https://logos-download.com/wp-content/uploads/2019/01/Dai_Logo.svg' />
                                    <p>DAI</p>
                                    <p>/</p>
                                </div>
                                <div className='coin-second-column'>
                                    <p>81.21</p>
                                    <p>81.21</p>
                                </div>
                            </div>
                            <div className='coin-first-row'>
                                <div className='coin-first-column'>
                                    <img style={{ width: "30px", height: "30px" }} src='https://logos-download.com/wp-content/uploads/2019/01/Dai_Logo.svg' />
                                    <p>DAI</p>
                                    <p>/</p>
                                </div>
                                <div className='coin-second-column'>
                                    <p></p>
                                    <p>&lt; 0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PositionDetails;

