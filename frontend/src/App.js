// // Importing modules
import React,{ useState, useEffect } from "react";
import { ethers } from "ethers";
import "./App.css";
// import { Button, Card } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import ReactRouter from './router/reactRoute';

// function App() {


// return (
// 	<div className="App">
// 	{/* Calling all values which we
// 	have stored in usestate */}

// 	<Card className="text-center">
// 		<Card.Header>
// 		<strong>Address: </strong>
// 		{currentAccount}
// 		</Card.Header>
// 		<Card.Body>
// 		<Card.Text>
// 			<strong>Balance: </strong>
// 			{Balance} 
// 		</Card.Text>
//     <Card.Text>
// 			<strong>Network: </strong>
// 			{Network} 
// 		</Card.Text>
//         {/*
//         * If there is no currentAccount render this button
//         */}
        
//         {!currentAccount && (
//           <button className="waveButton" onClick={connectWallet}>
//             Connect Wallet
//           </button>
//         )}
// 		</Card.Body>
// 	</Card>
// 	</div>
// );
// }

// export default App;


const App = () => {


  const [currentAccount, setCurrentAccount] = useState("");
  const [Balance, setBalance] = useState(0);
  const [Network, setNetwork] = useState("");



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



  /**
  * Implement your connectWallet method here
  */
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
        // if (networkId =='0x1'){networkId = "Ethereum Main Network";}
        // else if(networkId == '0x3'){networkId = "Ropsten Test Network";}
        // else if(networkId =='0x4'){networkId =  "Rinkeby Test Network";}
        // else if(networkId =='0x5'){networkId =  "Goerli Test Network";}
        if(networkId =='0x2a'){networkId = "Kovan Test Network";}
        else{ networkId = "Please Connect Kovan Network"}

        setNetwork(
          networkId,
        );
      });
  };
  



  /*
  * This runs our function when the page loads.
  */
  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])






  return(
    <ReactRouter currentAccount={currentAccount}
      balance={Balance}
      networkId = {Network}
      connectWallet = {connectWallet} />
  )
}

export default App;
