"use client";
import InputField from "../InputField/page";
import { useState } from "react";

type HeaderProps = {
  onCheckHowMuch: (
    value: number,
    currentCurrency: string,
    currencyWanted: string
  ) => void;
};

const Header: React.FC<HeaderProps> = ({ onCheckHowMuch }) => {
  const [currencyWanted, setCurrencyWanted] = useState("EUR");

  const handleCheck = (value: number, currentCurrency: string) => {
    onCheckHowMuch(value, currentCurrency, currencyWanted);
  };

  return (
    <div className="my-5 mx-2 flex flex-col justify-center items-center">
      <h1 className=" text-center font-bold text-3xl ">
        How Much Do I Have In
        <input
          type="text"
          className="underline w-16 text-center text-green-500 ml-2"
          placeholder="EUR"
          value={currencyWanted}
          maxLength={3}
          onChange={(e) => setCurrencyWanted(e.target.value)}
        />
        ?
      </h1>
      <InputField onCheck={handleCheck} />
    </div>
  );
};

export default Header;
