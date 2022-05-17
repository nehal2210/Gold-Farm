import React, { useState, useEffect } from "react";
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import '../../src/styles/home-screen-style//home-screen.css'
import { ethers } from "ethers";
import { Button, Card, Dropdown, DropdownButton } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import settingMenu from '../../src/images/setting-icon.png'


const HomeScreen = (props) => {

  // const [currentAccount, setCurrentAccount] = useState("");
  // const [Balance, setBalance] = useState(0);
  // const [Network, setNetwork] = useState("");
  const [inputToggle, setInputToggle] = useState(true);
  const [firstToken, setFirstToken] = useState(3243);
  const [secondToken, setSecondToken] = useState(2434);
  const [modal, setModal] = useState(0);
  const [coinsList, setCoinsList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCoin1, setSelectedCoin1] = useState({symbol:'coin'});
  const [selectedCoin2, setSelectedCoin2] = useState({symbol:'coin'});
  const [isCoin1, setisCoin1] = useState(true);



  useEffect(() => {
    return () => {
      fetch("https://static.optimism.io/optimism.tokenlist.json")
        .then(function (response) { return response.json(); })
        .then(function (data) {
          const list = [];
          list.push(data);
          setCoinsList(list[0].tokens);
          console.log("coinsList", coinsList)
        })
    };
  }, [])


  const changeInput = () => {
    console.log("input", inputToggle);
    setInputToggle(!inputToggle)
  }
  const forFirstToken = () => {
    console.log("input", inputToggle);
  }
  const forSecondToken = () => {
    console.log("input", inputToggle);
  }



  const setCoin = (item) => {
    console.log("item", item);
  }

  /*
  * This runs our function when the page loads.
  */
  useEffect(() => {
    // checkIfWalletIsConnected();
    console.log("input", inputToggle);
  }, [])







  return (
    <div className="home-container">
      <div className="card">
        <div className="card-header">
          <p>Swap</p>
          <Dropdown className="drop-down">
            <Dropdown.Toggle className="drop-down-toggle" variant="none" id="dropdown-basic">
              <img src={settingMenu} />
            </Dropdown.Toggle>
          </Dropdown>
        </div>
        {
          inputToggle ?
            <>
              <div className="eth" >
                <input type="text"  onChange={(e)=>e.target.value} placeholder='0.00'/>
                <Dropdown.Toggle id="dropdown-item-button" onClick={() => { setShowModal(true); setisCoin1(true)  }}>{selectedCoin1.symbol}</Dropdown.Toggle>
              </div>
              <div className="aerrow" onClick={changeInput}>
                <img src="https://d1bd5u3q1t3nu7.cloudfront.net/icons/16/arrow-down-icon.png" />
              </div>
              <div className="select-token">
                <input type="text"  onChange={(e)=>e.target.value} placeholder='0.00' disabled/>
                <Dropdown.Toggle id="dropdown-item-button" onClick={() => { setShowModal(true); setisCoin1(false) }}>{selectedCoin2.symbol}</Dropdown.Toggle>
              </div>
              <div className="connect-wallet">
              {props.currentAccount? <button >Swap</button>:<button onClick={props.connectWallet}>Connect Wallet</button>}
              </div>
            </>
            :
            // <>

            //   <div className="select-token">
            //     <input type="text" value={secondToken} onChange={forSecondToken} />
            //     <Dropdown.Toggle id="dropdown-item-button" onClick={() => { setShowModal(true)}} title="WBTC">{selectedCoin2}</Dropdown.Toggle>
            //   </div>
            //   <div className="aerrow" onClick={changeInput}>
            //     <img src="https://d1bd5u3q1t3nu7.cloudfront.net/icons/16/arrow-down-icon.png" />
            //   </div>
            //   <div className="eth" >
            //     <input type="text" value={firstToken} onChange={forFirstToken} />
            //     <Dropdown.Toggle id="dropdown-item-button" onClick={() => { setShowModal(true)}} title="ETH">{selectedCoin1}</Dropdown.Toggle>
            //   </div>
            //   <div className="connect-wallet">
            //     <button >Connect Wallet</button>
            //   </div>
            // </>
            null
        }
      </div>
      {
        showModal ?
          <div className="modal-screen">
            <div className="modal-header">
              <p>Please Select A Token</p>
              <p className="cross-icon" onClick={() => { setShowModal(false) }} >X</p>
            </div>
            <div className="scroll">
              {
                coinsList.map((d, i) => {
                  return (
                    d.chainId == 42 ?
                      <div className="coins-list" key={d.name + i} onClick={()=> {setShowModal(false);isCoin1?setSelectedCoin1(d):setSelectedCoin2(d)} }>
                        <div className="coins" onClick={setCoin(d)}>
                          <img style={{ width: "20px", height: "20px" }} src={d.logoURI} />
                        </div>
                        <div className="coins-details">
                          <p style={{ fontSize: "15px", width: "50%" }}>{d.symbol}</p>
                          <p style={{ fontSize: "12px", width: "45%", overflow: "hidden" }}>{d.name}</p>
                        </div>
                      </div>
                      : null
                  )
                })
              }
            </div>
          </div>
          :
          null
      }



    </div>
  )
};

export default HomeScreen;


const styles = {
  container: {
    backgroundColor: "red",
  }
}