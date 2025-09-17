import React from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function FriendsList() {
  return (
    <div
      className="friends-list"
      style={{ padding: "20px", maxWidth: "400px" }}
    >
      <h2>Friends</h2>
      {initialFriends.map((friend) => (
        <div
          key={friend.id}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <img
            src={friend.image}
            alt={friend.name}
            style={{ borderRadius: "50%", marginRight: "10px" }}
          />
          <div style={{ flex: 1 }}>
            <h4 style={{ margin: "0" }}>{friend.name}</h4>
            <p
              style={{
                margin: "4px 0",
                color:
                  friend.balance < 0
                    ? "red"
                    : friend.balance > 0
                    ? "green"
                    : "gray",
              }}
            >
              Balance: {friend.balance}
            </p>
          </div>
          <button>Start</button>
        </div>
      ))}

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button>Add Friend</button>
      </div>
    </div>
  );
}
