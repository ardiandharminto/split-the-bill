import { useState } from "react";

import FriendList from "./components/FriendList";
import AddFriendForm from "./components/AddFriendForm";
import SplitBillForm from "./components/SplitBillForm";

import "./styles.css";

export default function App() {
  const [friends, setFriends] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState("");
  const [isSplitBillFormOpen, setIsSplitBillFormOpen] = useState(false);
  const [isAddFriendFormOpen, setIsAddFriendFormOpen] = useState(true);

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
  }

  function handleUpdateFriendBill(id, bill, expense, isPayer) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === id
          ? { ...friend, bill: bill, myExpense: expense, isPayer: isPayer }
          : friend
      )
    );
  }

  return (
    <div className="container">
      <div className="friend-control">
        <FriendList
          friends={friends}
          selectedFriend={selectedFriend}
          onSetSelectedFriend={setSelectedFriend}
          isSplitBillFormOpen={isSplitBillFormOpen}
          onSetIsSplitBillFormOpen={setIsSplitBillFormOpen}
        />
        {isAddFriendFormOpen && <AddFriendForm onAddFriend={handleAddFriend} />}
        <div className="friend-control__action">
          <button
            className="friend-control__button"
            onClick={() => setIsAddFriendFormOpen((i) => !i)}
          >
            {isAddFriendFormOpen ? "Close" : "Add friend"}
          </button>
        </div>
      </div>
      <SplitBillForm
        isSplitBillFormOpen={isSplitBillFormOpen}
        selectedFriend={selectedFriend}
        onUpdateFriendBill={handleUpdateFriendBill}
      />
    </div>
  );
}
