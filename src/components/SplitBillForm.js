import { useState } from "react";

import Button from "./Button";

export default function SplitBillForm({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const friendExpense = bill ? bill - myExpense : "";
  const [isPayer, setIsPayer] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !myExpense) return;
    onSplitBill(isPayer ? -myExpense : friendExpense);
  }

  return (
    <form onSubmit={handleSubmit} className="split-bill-form">
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
          onChange={(e) =>
            setMyExpense(
              Number(e.target.value) > bill ? myExpense : Number(e.target.value)
            )
          }
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
          value={friendExpense}
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
        <Button className="split-bill-form__button">Split bill</Button>
      </div>
    </form>
  );
}
