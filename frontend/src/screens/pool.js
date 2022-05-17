import React, { useEffect, useState } from 'react';
import '../../src/styles/pool-style/pool-style.css';
import walletIcon from '../images/wallet-icon-rm.png'
import { ethers } from "ethers";
// import { ethers } from "ethers";
import { Button, Card, Dropdown, DropdownButton } from "react-bootstrap";

const Pool = (props) => {

  const [state, setState] = useState()
  // const [showFirstModal, setShowFirstModal] = useState(false);
  // const [showSecondModal, setShowSecondModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showCoinModal, setShowCoinModal] = useState(false);
  const [isKovanNetwork, setIsKovanNetwork] = useState(false);
  const [ShowAddLiq, setShowAddLiq] = useState(false)
  const [inputToggle, setInputToggle] = useState(true);
  const [firstToken, setFirstToken] = useState(3243);
  const [secondToken, setSecondToken] = useState(2434);
  const [modal, setModal] = useState(0);
  const [coinsList, setCoinsList] = useState([]);
  // const [showModal, setShowModal] = useState(false);
  const [selectedCoin1, setSelectedCoin1] = useState({ symbol: 'coin' });
  const [selectedCoin2, setSelectedCoin2] = useState({ symbol: 'coin' });
  const [isCoin1, setisCoin1] = useState(true);
  const [depositCoin1, setDepositCoin1] = useState(0.0);
  const [depositCoin2, setDepositCoin2] = useState(0.0);

  const [data, setData] = useState([
    {
      id: 1,
      pool: 'USDC/ETH',
      tvl: '$1,190',
      v24h: '03/01/2016 - 03/31/2016',
      v7d: '03/01/2016 - 03/31/2016'

    },
    {
      id: 2,
      pool: 'WBTC/ETH',
      tvl: '$2,443',
      v24h: '03/01/2016 - 03/31/2016',
      v7d: '03/01/2016 - 03/31/2016'

    },
    {
      id: 3,
      pool: 'RTC/ETH',
      tvl: '$1,181',
      v24h: '03/01/2016 - 03/31/2016',
      v7d: '03/01/2016 - 03/31/2016'

    },
    {
      id: 4,
      pool: 'TLC/ETH',
      tvl: '$842',
      v24h: '03/01/2016 - 03/31/2016',
      v7d: '03/01/2016 - 03/31/2016'

    }
  ])


  // useEffect(() => {
  //     // return () => {
  //     //     // fetch(
  //     //     //     "https://tokens.coingecko.com/uniswap/all.json")
  //     //     //     .then((res) => {
  //     //     //         // console.log("result", res.json())
  //     //     //         const items = res.json()
  //     //     //         console.log(items)
  //     //     //     }
  //     //     //     )
  //     //     // fetch("https://tokens.coingecko.com/uniswap/all.json")
  //     //     //     .then(function (response) { return response.json(); })
  //     //     //     .then(function (data) {
  //     //     //         const items = data;
  //     //     //         console.log(items)
  //     //     //     })
  //     // };
  //     ;}, [])



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


  const setCoin = (item) => {
    console.log("item", item);
  }


  return (
    <div className='pool-container'>

      <div className='pool-header'>
        <p>POOL</p>
        <button onClick={() => setShowModal(true)}>Create Pool</button>
      </div>
      <div className='pool-card'>
        <img src={walletIcon} />
        <p>Your active V3 liquidity positions will appear here.</p>
        {!props.currentAccount && (<button onClick={props.connectWallet}>Connect a wallet</button>)}
      </div>
      <div className='other-pool-list'></div>
      <div className='all-pools-container'>
        <p>All Pools</p>
        <div className='all-pools-card'>
          <table>
            <tbody>
              <tr>
                <th>#</th>
                <th>Pool</th>
                <th>TVL</th>
                <th>Volume 24H</th>
                <th>Volume 7D</th>
              </tr>
              {
                data.map((arr) => {
                  return (
                    <tr>
                      <td>{arr.id}</td>
                      <td>
                        {/* <img style={{ width: "25px", height: "20px" }} src={walletIcon} /> */}
                        {arr.pool}
                      </td>
                      <td>{arr.tvl}</td>
                      <td>{arr.v24h}</td>
                      <td>{arr.v7d}</td>
                    </tr>
                  )
                })
              }


            </tbody>
          </table>
        </div>
      </div>

      {
        showModal ?

          <div className='modal-pool'>
            <div className='modal-pool-header'>
              <p className='pool-modal-heading'>Select Pair</p>
              <p className="cross-icon" onClick={() => setShowModal(false)}>X</p>
            </div>
            <div className='modal-pool-container'>
              <div className='btns'>
                <Dropdown.Toggle id="dropdown-item-button" onClick={() => { setShowCoinModal(true); setisCoin1(true) }}>{selectedCoin1.symbol}</Dropdown.Toggle>
                <Dropdown.Toggle id="dropdown-item-button" onClick={() => { setShowCoinModal(true); setisCoin1(false) }}>{selectedCoin2.symbol}</Dropdown.Toggle>
              </div>
              <div className='inputs'>
                <input type="text" disabled />
                <p className='pool-modal-heading'>Deposite Amounts</p>
                <div style={{ width: "100%" }}>
                  Coin<input type="text" />
                </div>
                <div style={{ width: "100%" }}>
                  Coin<input type="text" />
                </div>
              </div>
              <div>
                <button>Connect Wallet</button>
              </div>
            </div>
            {
              showCoinModal ?
                <div className="modal-screen">
                  {/* <div className="modal-header">
                    <p>Please Select A Token</p>
                    <p className="cross-icon" onClick={() => { setShowCoinModal(false) }} >X</p>
                  </div> */}
                  <div className="scroll">
                    {
                      coinsList.map((d, i) => {
                        return (
                          d.chainId == 42 ?
                            <div className="coins-list" key={d.name + i} onClick={() => { setShowCoinModal(false); isCoin1 ? setSelectedCoin1(d) : setSelectedCoin2(d) }}>
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



          // <div className='center'>
          //   <div class="modal-rating">
          //     <h2>Select Pair</h2>
          //     <div class="rating">

          //       <div className="select-token">

          //         <Dropdown.Toggle id="dropdown-item-button" onClick={() => { setShowCoinModal(true); setisCoin1(true) }}>{selectedCoin1.symbol}</Dropdown.Toggle>
          //       </div>

          //       <div className="select-token">

          //         <Dropdown.Toggle id="dropdown-item-button" onClick={() => { setShowCoinModal(true); setisCoin1(false) }}>{selectedCoin2.symbol}</Dropdown.Toggle>
          //       </div>


          //       {
          //         showCoinModal ?
          //           <div className="modal-screen">
          //             {/* <div className="modal-header">
          //         <p>Please Select A Token</p>
          //         <p className="cross-icon" onClick={() => { setShowCoinModal(false) }} >X</p>
          //       </div> */}
          //             <div className="scroll">
          //               {
          //                 coinsList.map((d, i) => {
          //                   return (
          //                     d.chainId == 42 ?
          //                       <div className="coins-list" key={d.name + i} onClick={() => { setShowCoinModal(false); isCoin1 ? setSelectedCoin1(d) : setSelectedCoin2(d) }}>
          //                         <div className="coins" onClick={setCoin(d)}>
          //                           <img style={{ width: "20px", height: "20px" }} src={d.logoURI} />
          //                         </div>
          //                         <div className="coins-details">
          //                           <p style={{ fontSize: "15px", width: "50%" }}>{d.symbol}</p>
          //                           <p style={{ fontSize: "12px", width: "45%", overflow: "hidden" }}>{d.name}</p>
          //                         </div>
          //                       </div>
          //                       : null
          //                   )
          //                 })
          //               }
          //             </div>
          //           </div>
          //           :
          //           null
          //       }
          //       <br />
          //       <div>
          //         <input placeholder='3% tier fee' value={"3% Tier Fee"} />
          //       </div>
          //       <h2>Deposit Amounts</h2>
          //       <div>
          //         <input placeholder='0.0' value={depositCoin1} onChange={(e) => { setDepositCoin1(e.target.value) }} />
          //         {selectedCoin1.symbol}
          //       </div>
          //       <div>
          //         <input placeholder='0.0' value={depositCoin2} onChange={(e) => { setDepositCoin2(e.target.value) }} />
          //         {selectedCoin2.symbol}
          //       </div>




          //     </div>
          //     <button onClick={() => {
          //       data.push({
          //         id: data.length + 1,
          //         pool: selectedCoin1.symbol + '/' + selectedCoin2.symbol,
          //         tvl: depositCoin1,
          //         v24h: '03/01/2016 - 03/31/2016',
          //         v7d: '03/01/2016 - 03/31/2016'
          //       }); setShowModal(false)
          //     }}>Connect Wallet</button>
          //   </div>
          // </div>



          // <div className="modal-screen">
          //   <div className="modal-header">
          //     <p>Please Select A Token</p>
          //     <p className="cross-icon" onClick={() => { setShowModal(false) }} >X</p>
          //   </div>
          //   <div>
          //     <div className="scroll">
          //       {
          //         coinsList.map((d, i) => {
          //           return (
          //             d.chainId == 42 ?
          //               <div className="coins-list" key={d.name + i} onClick={() => { setShowModal(false); isCoin1 ? setSelectedCoin1(d) : setSelectedCoin2(d) }}>
          //                 <div className="coins" onClick={setCoin(d)}>
          //                   <img style={{ width: "20px", height: "20px" }} src={d.logoURI} />
          //                 </div>
          //                 <div className="coins-details">
          //                   <p style={{ fontSize: "15px", width: "50%" }}>{d.symbol}</p>
          //                   <p style={{ fontSize: "12px", width: "45%", overflow: "hidden" }}>{d.name}</p>
          //                 </div>
          //               </div>
          //               : null
          //           )
          //         })
          //       }
          //     </div>
          //   </div>

          //   <div>
          //     <div className="scroll">
          //       {
          //         coinsList.map((d, i) => {
          //           return (
          //             d.chainId == 42 ?
          //               <div className="coins-list" key={d.name + i} onClick={() => { setShowModal(false); isCoin1 ? setSelectedCoin1(d) : setSelectedCoin2(d) }}>
          //                 <div className="coins" onClick={setCoin(d)}>
          //                   <img style={{ width: "20px", height: "20px" }} src={d.logoURI} />
          //                 </div>
          //                 <div className="coins-details">
          //                   <p style={{ fontSize: "15px", width: "50%" }}>{d.symbol}</p>
          //                   <p style={{ fontSize: "12px", width: "45%", overflow: "hidden" }}>{d.name}</p>
          //                 </div>
          //               </div>
          //               : null
          //           )
          //         })
          //       }
          //     </div>
          //   </div>


          // </div>
          :
          null
      }




    </div>
  )
}
export default Pool;

