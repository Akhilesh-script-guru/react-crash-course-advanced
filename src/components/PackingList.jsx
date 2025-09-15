export default function Item() {
  const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
  ];

  return (
    <>
      <li>
        {initialItems.map((item) => {
          return (
            <>
              <input type="checkbox" />
              <span style={{ margin: "12px" }}>
                {`${item.quantity}`} {`${item.description}`}
                <button>❌</button>
              </span>
            </>
          );
        })}
      </li>
    </>
  );
}
