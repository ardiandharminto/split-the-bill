import Button from "./Button";

export default function FriendItem({ friend, selectedFriend, onSelection }) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <div className={`friend-list__item ${isSelected ? "active" : ""}`}>
      <div className="friend-list__content">
        <img
          className="friend-list__photo"
          src={friend.imageUrl}
          alt={friend.name}
        />
        <div className="friend-list__info">
          <p className="friend-list__name">{friend.name}</p>
          {friend.balance < 0 && (
            <span style={{ color: "red" }}>
              You owe {friend.name} Rp{Math.abs(friend.balance)}
            </span>
          )}
          {friend.balance > 0 && (
            <span style={{ color: "green" }}>
              {friend.name} owes you Rp{Math.abs(friend.balance)}
            </span>
          )}
          {friend.balance === 0 && <span>You and {friend.name} are even</span>}
        </div>
      </div>
      <Button
        className="friend-list__button"
        onClick={() => onSelection(friend)}
      >
        {isSelected ? "Close" : "Select"}
      </Button>
    </div>
  );
}
