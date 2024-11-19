import { useState } from "react";

export default function SplitBillForm({
  isSplitBillFormOpen,
  selectedFriend,
  onUpdateFriendBill,
}) {
  const [bill, setBill] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const [isPayer, setIsPayer] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateFriendBill(selectedFriend.id, bill, myExpense, isPayer);
    setBill("");
    setMyExpense("");
    setIsPayer(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="split-bill-form"
      style={!isSplitBillFormOpen ? { visibility: "hidden" } : {}}
    >
      <h3 className="split-bill-form__title">
        Split A Bill With {selectedFriend.name}
      </h3>
      <div className="split-bill-form__field">
        <div className="split-bill-form__label-wrapper">
          <span className="split-bill-form__emoji">💰</span>
          <label>Bill value</label>
        </div>
        <input
          type="number"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
          className="split-bill-form__input"
        />
      </div>
      <div className="split-bill-form__field">
        <div className="split-bill-form__label-wrapper">
          <span className="split-bill-form__emoji">🧍‍♂️</span>
          <label>Your expense</label>
        </div>
        <input
          type="number"
          value={myExpense}
          onChange={(e) => setMyExpense(Number(e.target.value))}
          className="split-bill-form__input"
        />
      </div>
      <div className="split-bill-form__field">
        <div className="split-bill-form__label-wrapper">
          <span className="split-bill-form__emoji">👫</span>
          <label>{selectedFriend.name}'s expense</label>
        </div>
        <input
          type="number"
          value={bill - myExpense > 0 ? bill - myExpense : ""}
          disabled
          className="split-bill-form__input"
          style={{ color: "#fff" }}
        />
      </div>
      <div className="split-bill-form__field">
        <div className="split-bill-form__label-wrapper">
          <span className="split-bill-form__emoji">🤑</span>
          <label>Who is paying the bill?</label>
        </div>
        <select
          value={+isPayer}
          onChange={(e) => setIsPayer(!!+e.target.value)}
          className="split-bill-form__input"
        >
          <option value="0">You</option>
          <option value="1">{selectedFriend.name}</option>
        </select>
      </div>
      <div className="split-bill-form__action">
        <button className="split-bill-form__button">Split bill</button>
      </div>
    </form>
  );
}
