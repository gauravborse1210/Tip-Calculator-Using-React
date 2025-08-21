import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = Number(bill) * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <Bill bill={bill} onSetBill={setBill} />
      <Percentage
        percentage={percentage1}
        onSelect={setPercentage1}
        label={"How did you like the service?"}
      />
      <Percentage
        percentage={percentage2}
        onSelect={setPercentage2}
        label={"How did your friend like the service?"}
      />
      {bill > 0 && (
        <>
          <Total bill={+bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function Bill({ bill, onSetBill }) {
  return (
    <div>
      <p>
        How much was the bill?
        <input
          value={bill}
          onChange={(e) => onSetBill(Number(e.target.value))}
          type="text"
          placeholder="Enter your bill amount"
        />
      </p>
    </div>
  );
}

function Percentage({ label, percentage, onSelect }) {
  return (
    <div>
      <p>
        {label}
        <select
          value={percentage}
          onChange={(e) => onSelect(Number(e.target.value))}
        >
          <option value={0}>Dissatisfied (0%)</option>
          <option value={5}>It was okay (5%)</option>
          <option value={10}>It was good (10%)</option>
          <option value={20}>Absolutely amazing! (20%)</option>
        </select>
      </p>
    </div>
  );
}

function Total({ bill, tip }) {
  // const grandTotal = bill + tip;

  return (
    <h1>
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </h1>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
