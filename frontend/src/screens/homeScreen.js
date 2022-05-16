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


const HomeScreen = () => {

  const [currentAccount, setCurrentAccount] = useState("");
  const [Balance, setBalance] = useState(0);
  const [Network, setNetwork] = useState("");
  const [inputToggle, setInputToggle] = useState(true);
  const [firstToken, setFirstToken] = useState(3243);
  const [secondToken, setSecondToken] = useState(2434);
  const [modal, setModal] = useState(0);
  const [coinsList, setCoinsList] = useState([]);
  const [showModal, setShowModal] = useState(true);



  useEffect(() => {
    return () => {
      fetch("https://tokens.coingecko.com/uniswap/all.json")
        .then(function (response) { return response.json(); })
        .then(function (data) {
          const list = [];
          list.push(data);
          setCoinsList(list[0].tokens);
          console.log("coinsList", coinsList)
        })
    };
  }, [])

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      /*
      * Check if we're authorized to access the user's wallet
      */
      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        getbalance(account);
        setCurrentAccount(account);
        getNetwork();
      } else {
        console.log("No authorized account found")
      }
    } catch (error) {
      console.log(error);
    }
  }

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
      getbalance(accounts[0]);
      getNetwork();
    } catch (error) {
      console.log(error)
    }
  }

  // getbalance function for getting a balance in
  // a right format with help of ethers
  const getbalance = (address) => {

    // Requesting balance method
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [address, "latest"]
      })
      .then((balance) => {
        // Setting balance
        setBalance(
          ethers.utils.formatEther(balance),
        );
      });
  };


  const getNetwork = () => {

    // Requesting balance method
    window.ethereum
      .request({
        method: "eth_chainId"
      })
      .then((networkId) => {
        // Setting balance
        if (networkId == '0x1') { networkId = "Ethereum Main Network"; }
        else if (networkId == '0x3') { networkId = "Ropsten Test Network"; }
        else if (networkId == '0x4') { networkId = "Rinkeby Test Network"; }
        else if (networkId == '0x5') { networkId = "Goerli Test Network"; }
        else if (networkId == '0x2a') { networkId = "Kovan Test Network"; }
        else { networkId = networkId }

        setNetwork(
          networkId,
        );
      });
  };

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


  /*
  * This runs our function when the page loads.
  */
  useEffect(() => {
    checkIfWalletIsConnected();
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
                <input type="text" value={firstToken} onChange={forFirstToken} />
                <Dropdown.Toggle id="dropdown-item-button" onClick={()=>{setShowModal(true)}} >ETH</Dropdown.Toggle>
              </div>
              <div className="aerrow" onClick={changeInput}>
                <img src="https://d1bd5u3q1t3nu7.cloudfront.net/icons/16/arrow-down-icon.png" />
              </div>
              <div className="select-token">
                <input type="text" value={secondToken} onChange={forSecondToken} />
                <Dropdown.Toggle id="dropdown-item-button" onClick={()=>{setShowModal(true)}}>WBTC</Dropdown.Toggle>
              </div>
              <div className="connect-wallet">
                <button>Connect Wallet</button>
              </div>
            </>
            :
            <>

              <div className="select-token">
                <input type="text" value={secondToken} onChange={forSecondToken} />
                <Dropdown.Toggle id="dropdown-item-button" onClick={()=>{setShowModal(true)}} title="WBTC">WBTC</Dropdown.Toggle>
              </div>
              <div className="aerrow" onClick={changeInput}>
                <img src="https://d1bd5u3q1t3nu7.cloudfront.net/icons/16/arrow-down-icon.png" />
              </div>
              <div className="eth" >
                <input type="text" value={firstToken} onChange={forFirstToken} />
                <Dropdown.Toggle id="dropdown-item-button" onClick={()=>{setShowModal(true)}} title="ETH">ETH</Dropdown.Toggle>
              </div>
              <div className="connect-wallet">
                <button>Connect Wallet</button>
              </div>
            </>
        }
      </div>
      {
        showModal ?
          <div className="modal-screen">
            <div className="modal-header">
              <p>Please Select A Token</p>
              <p className="cross-icon" onClick={()=>{setShowModal(false)}} >X</p>
            </div>
            <div className="scroll">
              {
                coinsList.map((d, i) => {
                  return (

                    <div className="coins-list">
                      <div className="coins">
                        <img style={{ width: "20px", height: "20px" }} src={d.logoURI} />
                      </div>
                      <div className="coins-details">
                        <p style={{fontSize: "15px", width: "50%"}}>{d.symbol}</p>
                        <p style={{fontSize: "12px", width: "45%", overflow: "hidden"}}>{d.name}</p>
                      </div>
                    </div>
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