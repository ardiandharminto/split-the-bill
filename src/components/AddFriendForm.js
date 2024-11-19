import { useState } from "react";

export default function AddFriendForm({ onAddFriend }) {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newFriend = {
      id: Date.now(),
      name: name,
      bill: 0,
      myExpense: 0,
      isPayer: false,
      imageUrl: avatar,
    };
    onAddFriend(newFriend);
    setName("");
    setAvatar("");
  }

  return (
    <form className="add-friend-form" onSubmit={handleSubmit}>
      <div className="add-friend-form__field-wrapper">
        <div className="add-friend-form__label-group">
          <span className="add-friend-form__emoji">👫</span>
          <label className="add-friend-form__label">Friend Name</label>
        </div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="add-friend-form__input"
        />
      </div>
      <div className="add-friend-form__field-wrapper">
        <div className="add-friend-form__label-group">
          <span className="add-friend-form__emoji">🌄</span>
          <label className="add-friend-form__label">Image URL</label>
        </div>
        <input
          type="text"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          className="add-friend-form__input"
        />
      </div>
      <div className="add-friend-form__action">
        <button className="add-friend-form__button">Add</button>
      </div>
    </form>
  );
}
