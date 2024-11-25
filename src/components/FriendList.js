import FriendItem from "./FriendItem";

export default function FriendList({ friends, selectedFriend, onSelection }) {
  return (
    <div className="friend-list">
      {friends.map((friend) => (
        <FriendItem
          key={friend.id}
          friend={friend}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </div>
  );
}
