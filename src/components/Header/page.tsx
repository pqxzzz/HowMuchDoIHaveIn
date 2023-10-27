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

  // const CheckHowMuch = (
  //   value: number,
  //   currentCurrency: string,
  //   currencyWanted: string
  // ) => {};

  const handleCheck = (value: number, currentCurrency: string) => {
    onCheckHowMuch(value, currentCurrency, currencyWanted);
  };

  return (
    <div className=" BoxShadow my-2 mt-20  flex flex-col justify-center items-center border-2 border-[#1f1f09] bg-yellow-500 w-1/2 h-1/3 mx-auto p-5 rounded-md ">
      <h1 className="text-white text-center font-bold text-4xl mb-4 ShadowFont shadow-black">
        How Much Do I Have In
        <input
          type="text"
          className="underline w-20 ShadowFont text-center  text-green-500 ml-2 bg-transparent outline-none"
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
