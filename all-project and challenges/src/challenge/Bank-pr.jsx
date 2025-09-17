import React from "react";
import { useReducer } from "react";

const BankAc = () => {
  const initialValue = {
    balance: 0,
    loan: 0,
    isOpen: false,
  };

  function reducer(state, action) {
    console.log(state, action);

    switch (action.type) {
      case "openAccount":
        return {
          ...state,
          isOpen: true,
          balance: 0,
          loan: 0,
        };
      case "deposit":
        return { ...state, balance: state.balance + action.payload };
      case "withdraw":
        return { ...state, balance: state.balance - action.payload };
      case "reqLoan":
        if (state.loan === 0)
          return { ...state, loan: 5000, balance: state.balance + 5000 };
        return state;
      case "payLoan":
        if (state.balance >= state.loan)
          return { ...state, balance: state.balance - state.loan, loan: 0 };
        return state;
      case "close":
        return { ...state, balance: 0, loan: 0, isOpen: false };
      default:
        return state;
    }
  }

  const [{ isOpen, balance, loan }, dispatch] = useReducer(
    reducer,
    initialValue
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>💰 Bank Account (useReducer) 💳</h1>

      {isOpen ? (
        <>
          <div style={styles.accountDetails}>
            <h3 style={styles.balance}>Balance: ${balance}</h3>
            <h3 style={styles.loan}>Loan: ${loan}</h3>
          </div>
        </>
      ) : (
        <p style={styles.message}>🔒 Please open your account first!</p>
      )}

      <div style={styles.buttonContainer}>
        <button
          onClick={() => dispatch({ type: "openAccount" })}
          style={styles.button}
        >
          🚪 Open Account
        </button>
        <button
          onClick={() => dispatch({ type: "deposit", payload: 150 })}
          style={styles.button}
        >
          💸 Deposit $150
        </button>
        <button
          onClick={() => dispatch({ type: "withdraw", payload: 50 })}
          style={styles.button}
        >
          🏧 Withdraw $50
        </button>
        <button
          onClick={() => dispatch({ type: "reqLoan" })}
          style={styles.button}
        >
          💳 Request Loan $5000
        </button>
        <button
          onClick={() => dispatch({ type: "payLoan" })}
          style={styles.button}
        >
          💳 Pay Loan
        </button>
        {isOpen ? (
          <button
            onClick={() => dispatch({ type: "close" })}
            style={styles.button}
          >
            ❌ Close Account
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f7f6",
    padding: "20px",
    borderRadius: "10px",
    width: "400px",
    margin: "auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  header: {
    textAlign: "center",
    color: "#2f4f4f",
    fontSize: "24px",
    marginBottom: "20px",
  },
  accountDetails: {
    marginBottom: "20px",
    textAlign: "center",
  },
  balance: {
    fontSize: "20px",
    color: "#4CAF50",
    margin: "10px 0",
  },
  loan: {
    fontSize: "20px",
    color: "#FF5722",
    margin: "10px 0",
  },
  message: {
    textAlign: "center",
    fontSize: "18px",
    color: "#ff5722",
    fontWeight: "bold",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#6200ea",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  },
};

export default BankAc;
