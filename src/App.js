import { useState } from "react";

import FriendList from "./components/FriendList";
import AddFriendForm from "./components/AddFriendForm";
import SplitBillForm from "./components/SplitBillForm";
import Button from "./components/Button";

import "./styles.css";

const initialFriends = [
  {
    id: 1,
    name: "Priscilla",
    imageUrl: "https://i.pravatar.cc/50?u=7",
    balance: -65000,
  },
  {
    id: 2,
    name: "Nathaniel",
    imageUrl: "https://i.pravatar.cc/48?u=12",
    balance: 20000,
  },
  {
    id: 3,
    name: "Tandiman",
    imageUrl: "https://i.pravatar.cc/48?u=20",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);

  function handleShowAddFriendForm() {
    setShowAddFriendForm((show) => !show);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriendForm(false);
  }

  function handleSelection(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriendForm(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  }

  return (
    <div className="container">
      <div className="friend-control">
        <FriendList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />

        {showAddFriendForm && <AddFriendForm onAddFriend={handleAddFriend} />}

        <div className="friend-control__action">
          <Button
            className="friend-control__button"
            onClick={handleShowAddFriendForm}
          >
            {showAddFriendForm ? "Close" : "Add friend"}
          </Button>
        </div>
      </div>

      {selectedFriend && (
        <SplitBillForm
          key={selectedFriend.id}
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}
