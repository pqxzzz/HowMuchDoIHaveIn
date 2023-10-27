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
      <div className=" flex justify-center items-center p-2">
        <input
          className=" border appearance-none border-yellow-800 rounded w-1/3 py-2 text-center text-2xl px-2 mx-3"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value))}
          type="number"
        />

        <input
          placeholder="USD"
          className="border text-2xl  border-yellow-800 rounded py-2 outline-none w-1/6 text-center"
          type="text"
          value={currentCurrency}
          onChange={(e) => setCurrentCurrency(e.target.value)}
          maxLength={3}
        />
      </div>

      <button
        className=" BoxShadow rounded-md bg-white  px-4 py-3 w-fit mt-3 font-bold text-yellow-900 hover:bg-yellow-200 hover:text-yellow-900"
        type="submit"
      >
        Check
      </button>
    </form>
  );
};

export default InputField;
