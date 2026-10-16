import React, { useState,useEffect } from 'react'
import axios from 'axios'
function Summ() {
  const [theme, setTheme] = useState("light")
  const [birthYear, setBirthYear] = useState("")
  const [ageResult, setAgeResult] = useState("")
  const [ticker, setTicker] = useState("")
  const [stockData, setStockData] = useState(null)
    function handleAge() {
    setAgeResult(2026 - birthYear)
  }
function handleStockFetch() {
    axios.get("https://dummyjson.com/c/a55e-94d8-46c6-9cb0 ")
      .then((response) => {
        // const found = response.data.stocks.find(s => s.symbol === ticker)
        console.log(response.data)
      });
  }
return (
    <div style={{ background: theme === "light" ? "white" : "black", color: theme === "light" ? "black" : "white", height:"100vh" }}>
      <h1>My Task App</h1>
      <h2>Theme Changer</h2>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
      <h2>Age Calculator</h2>
      <input type="number" onChange={(e) => setBirthYear(e.target.value)} />
      <button onClick={handleAge}>Find Age</button>
      <p>Age: {ageResult}</p>
      <h2>Stock Tracker</h2>
      <input type="text" onChange={(e) => setTicker(e.target.value)} />
      <button onClick={handleStockFetch}>Get Price</button>
      {stockData && (
        <div>
          <h3>{stockData.symbol}</h3>
          <p>Price: {stockData.price}</p>
        </div>
      )}

    </div>
  );
}
export default Summ
