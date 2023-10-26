"use client";
import { useState } from "react";

type InputProps = {
  onCheck: (amount: number, currentCurrency: string) => void;
};

const InputField: React.FC<InputProps> = ({ onCheck }) => {
  const [amount, setAmount] = useState<number>(0);
  const [currentCurrency, setCurrentCurrency] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (amount > 0) {
      onCheck(amount, currentCurrency);
    } else {
      console.log("insira um valor!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center"
    >
      <div className=" flex p-2">
        <input
          className="border appearance-none border-green-500 rounded w-[200px] text-2xl px-2 mx-3"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value))}
          type="number"
        />

        <input
          placeholder="___"
          className="border  border-green-500 rounded font-bold w-[50px] text-center"
          type="text"
          value={currentCurrency}
          onChange={(e) => setCurrentCurrency(e.target.value)}
          maxLength={3}
        />
      </div>

      <button
        className="bg-green-400 px-3 py-2 w-fit mt-3 rounded-sm font-bold text-green-900 hover:bg-green-500 hover:text-emerald-900"
        type="submit"
      >
        Check
      </button>
    </form>
  );
};

export default InputField;
