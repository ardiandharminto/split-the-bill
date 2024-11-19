export default function FriendItem({
  friend,
  selectedFriend,
  onSetSelectedFriend,
  isSplitBillFormOpen,
  onSetIsSplitBillFormOpen,
}) {
  function handleSelectFriend() {
    onSetIsSplitBillFormOpen((o) => !o);
    if (selectedFriend.id !== friend.id) onSetSelectedFriend(friend);
  }

  return (
    <div
      className={`friend-list__item ${
        selectedFriend.id === friend.id && isSplitBillFormOpen ? "active" : ""
      }`}
    >
      <div className="friend-list__content">
        <img
          className="friend-list__photo"
          src={friend.imageUrl}
          alt="avatar"
        />
        <div className="friend-list__info">
          <p className="friend-list__name">{friend.name}</p>
          <span
            className="friend-list__status"
            style={
              friend.bill / 2 === friend.myExpense
                ? {}
                : friend.isPayer
                ? { color: "red" }
                : { color: "green" }
            }
          >
            {friend.bill / 2 === friend.myExpense
              ? `You and ${friend.name} are even`
              : friend.isPayer
              ? `You owe ${friend.name} Rp${friend.myExpense}`
              : `${friend.name} owes you Rp${friend.bill - friend.myExpense}`}
          </span>
        </div>
      </div>
      <button className="friend-list__button" onClick={handleSelectFriend}>
        {selectedFriend.id === friend.id && isSplitBillFormOpen
          ? "Close"
          : "Select"}
      </button>
    </div>
  );
}
