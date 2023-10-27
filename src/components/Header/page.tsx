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
  const [currencyWanted, setCurrencyWanted] = useState("");

  // const CheckHowMuch = (
  //   value: number,
  //   currentCurrency: string,
  //   currencyWanted: string
  // ) => {};

  const handleCheck = (value: number, currentCurrency: string) => {
    onCheckHowMuch(value, currentCurrency, currencyWanted);
  };

  return (
    <div
      className=" BoxShadow my-2 sm:mt-20  flex flex-col justify-center items-center
     border-2 border-[#1f1f09] bg-yellow-500   mx-auto p-5 rounded-md sm:w-1/2 sm:h-1/3 "
    >
      <h1 className="text-white text-center font-bold text-2xl mb-4 ShadowFont shadow-black sm:text-4xl">
        How Much Do I Have In
        <input
          type="text"
          className="underline w-20 ShadowFont text-center  text-green-500 bg-transparent outline-none sm:ml-2"
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
