import FriendItem from "./FriendItem";

export default function FriendList({
  friends,
  selectedFriend,
  onSetSelectedFriend,
  isSplitBillFormOpen,
  onSetIsSplitBillFormOpen,
}) {
  return (
    <div className="friend-list">
      {friends.map((friend) => (
        <FriendItem
          key={friend.id}
          friend={friend}
          selectedFriend={selectedFriend}
          onSetSelectedFriend={onSetSelectedFriend}
          isSplitBillFormOpen={isSplitBillFormOpen}
          onSetIsSplitBillFormOpen={onSetIsSplitBillFormOpen}
        />
      ))}
    </div>
  );
}
