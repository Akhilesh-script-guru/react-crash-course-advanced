export default function Item({ items, deleteItems, handleIsCompelted }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.text}>
          <input
            type="checkbox"
            checked={item.isComplete}
            onChange={() => handleIsCompelted(item.text)}
          />
          <span style={{ margin: "12px" }}>
            {item.number}{" "}
            <span
              style={{ textDecoration: item.isComplete ? "underline" : "none" }}
            >
              {item.text}
            </span>
            <button onClick={() => deleteItems(item.text)}>❌</button>
          </span>
        </li>
      ))}
    </ul>
  );
}
