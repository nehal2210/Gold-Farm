import React, { useEffect, useState } from 'react';
import '../../src/styles/pool-style/pool-style.css';
import walletIcon from '../images/wallet-icon-rm.png'


const Pool = () => {

    const [state, setState] = useState()



    useEffect(() => {
        return () => {
            fetch(
                "https://tokens.coingecko.com/uniswap/all.json")
                .then((res) => console.log("result", res.json())
                    //   res.json())
                    //   .then((json) => {
                    //       setState({
                    //           items: json,
                    //           DataisLoaded: true
                    //       });
                    //       console.log("state", state);
                    //   })
                )
        };
    }, [])




    return (
        <div className='pool-container'>
            <div className='pool-header'>
                <p>POOL</p>
                <button>Create Pool</button>
            </div>
            <div className='pool-card'>
                <img src={walletIcon} />
                <p>Your active V3 liquidity positions will appear here.</p>
                <button>Connect a wallet</button>
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

                            <tr>
                                <td>1</td>
                                <td>
                                    <img style={{width : "25px", height : "20px"}} src={walletIcon} />
                                    USDC/ETH
                                </td>
                                <td>$1,190</td>
                                <td>03/01/2016 - 03/31/2016</td>
                                <td>03/01/2016 - 03/31/2016</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>WBTC/ETH</td>
                                <td>$2,443</td>
                                <td>02/01/2016 - 02/29/2016</td>
                                <td>02/01/2016 - 02/29/2016</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>RTC/ETH</td>
                                <td>$1,181</td>
                                <td>$1,181</td>
                                <td>02/01/2016 - 02/29/2016</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>TLC/ETH</td>
                                <td>$842</td>
                                <td>01/01/2016 - 01/31/2016</td>
                                <td>01/01/2016 - 01/31/2016</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}
export default Pool;