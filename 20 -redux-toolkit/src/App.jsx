import React, { useState } from "react";
import "./App.css";
import {
  deposit,
  payLoan,
  requestLoan,
  withdraw,
} from "./store/slices/accountSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  const [loan, setLoan] = useState(0);
  const [purpose, setPurpose] = useState("");

  const account = useSelector((store) => store.account.balance);
  const loans = useSelector((store) => store.account.loan);
  const loanPurpose = useSelector((store) => store.account.loanPurpose);

  return (
    <div style={styles.container}>
      <h1>🏦 Simple Bank UI</h1>

      <div style={styles.section}>
        <h2>{`Balance: ${account}`}</h2>
        <p>{`💳 Loan: ${loans}`}</p>
        <p>{`📌 Purpose: ${loanPurpose}`}</p>
      </div>

      <div style={styles.section}>
        <h3>Deposit / Withdraw</h3>
        <input
          type="number"
          placeholder="Amount"
          style={styles.input}
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <div>
          <button
            style={styles.button}
            onClick={() => dispatch(deposit(amount))}
          >
            Deposit
          </button>
          <button
            style={styles.button}
            onClick={() => dispatch(withdraw(amount))}
          >
            Withdraw
          </button>
        </div>
      </div>

      <div style={styles.section}>
        <h3>Request Loan</h3>
        <input
          type="number"
          placeholder="Loan Amount"
          style={styles.input}
          value={loan}
          onChange={(e) => setLoan(Number(e.target.value))}
        />
        <input
          type="text"
          placeholder="Loan Purpose"
          style={styles.input}
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
        />
        <div>
          <button
            style={styles.button}
            onClick={() => dispatch(requestLoan({ amount: loan, purpose }))}
          >
            Request Loan
          </button>
        </div>
      </div>

      <div style={styles.section}>
        <button style={styles.button} onClick={() => dispatch(payLoan())}>
          Pay Loan
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "2rem auto",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f0f4f8",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  section: {
    margin: "2rem 0",
  },
  input: {
    padding: "0.5rem",
    margin: "0.5rem",
    width: "80%",
    maxWidth: "300px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "0.5rem 1rem",
    margin: "0.5rem",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
  },
};

export default App;
