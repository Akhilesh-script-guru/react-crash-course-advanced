import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    id: 2,
    question: "What is a component?",
    answer: "A component is a reusable piece of UI in React.",
  },
  {
    id: 3,
    question: "What is JSX?",
    answer: "JSX is a syntax extension that allows writing HTML in JavaScript.",
  },
  {
    id: 4,
    question: "What is state in React?",
    answer:
      "State is a built-in object that stores property values that belong to a component.",
  },
  {
    id: 5,
    question: "What are props?",
    answer: "Props are inputs to components, passed as attributes.",
  },
  {
    id: 6,
    question: "What is useState?",
    answer:
      "useState is a React hook that lets you manage state in a functional component.",
  },
  {
    id: 7,
    question: "What is useEffect?",
    answer: "useEffect lets you perform side effects in function components.",
  },
  {
    id: 8,
    question: "What is a key in React lists?",
    answer:
      "A key is a unique identifier to help React identify which items have changed.",
  },
  {
    id: 9,
    question: "How do you pass data between components?",
    answer:
      "By using props from parent to child, or context/state management for complex flows.",
  },
  {
    id: 10,
    question: "What is conditional rendering?",
    answer:
      "It's rendering content based on a condition, like using ternary operators.",
  },
];

export default function FAQList() {
  const [selectedId, setSelectedId] = useState(null);

  const handleToggle = (id) => {
    setSelectedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div>
      <h2>FAQs</h2>
      {faqs.map((faq) => (
        <div
          key={faq.id}
          style={styles.card}
          onClick={() => handleToggle(faq.id)}
        >
          <h3 style={styles.question}>{faq.question}</h3>
          {selectedId === faq.id && <p style={styles.answer}>{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "1rem",
    marginBottom: "1rem",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
  },
  question: {
    margin: 0,
    color: "#333",
  },
  answer: {
    marginTop: "0.5rem",
    color: "#222",
    fontStyle: "italic",
  },
};
