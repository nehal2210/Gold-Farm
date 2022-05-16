import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const About = () => {
    const [coinsList, setCoinsList] = useState([{ "name": "test1" }, { "name": "test2" }])



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
    const data = [{ "name": "test1" }, { "name": "test2" }];
    const listItems = coinsList.map((d, i) => <li key={d.name + d.address + i}><img src={d.logoURI} /> {d.symbol} {d.name} {d.address} {d.chainId} {d.decimals} {d.logoURI}</li>);

    return (
        <div>
            {listItems}
        </div>
    );


    return (
        <div style={styles.container}>
            <h1><Link to="/">Hello React Aboute Page</Link></h1>
            <p>sasa</p>
        </div>
    )
};

export default About;


const styles = {
    container: {
        backgroundColor: "tomato",
    }
}