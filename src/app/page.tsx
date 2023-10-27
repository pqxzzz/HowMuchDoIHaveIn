"use client";
import Header from "@/components/Header/page";
import { useEffect, useState } from "react";
import arrow from "../assets/arrow.png";

type Props = {
  new_amount: number;
  new_currency: string;
  old_currency: string;
  old_amount: number;
};

export default function Home() {
  const [valor, setValor] = useState<Props | null>();
  const [value, setValue] = useState<number>(0);
  const [old_cur, setOld_cur] = useState<string | null>("");
  const [new_cur, setNew_cur] = useState<string | null>("");

  const checkHowMuchFunction = (
    value: number,
    currentCurrency: string,
    currencyWanted: string
  ) => {
    setValue(value);
    setOld_cur(currentCurrency);
    setNew_cur(currencyWanted);
    getData(currentCurrency, currencyWanted, value);
  };

  const getData = (
    currentCurrency: string,
    currencyWanted: string,
    value: number
  ) => {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "af717a7493mshc01c20613ca1544p1e2c2cjsn1d32fd48ed50",
      },
    };
    const url = `https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${currentCurrency}&want=${currencyWanted}&amount=${value}`;

    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setValor(response);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className=" h-screen">
      <Header onCheckHowMuch={checkHowMuchFunction} />
      <h1 className="text-white text-center text-xl">
        Check the list of
        <a
          className="ml-2 underline"
          target="_blank"
          href="https://en.wikipedia.org/wiki/ISO_4217#Active_codes_(List_One)"
        >
          currencies
        </a>
      </h1>
      <section className="py-20 h-full my-custom-class">
        {valor?.new_amount && (
          <div className="flex flex-col ">
            <div className="flex flex-col items-center  justify-center sm:flex-row ">
              <h1 className="bg-red-500 mx-3 px-2 py-1 rounded-md font-bold text-2xl text-white">
                {valor?.old_currency}
              </h1>
              <h1 className="font-bold text-3xl text-white">
                ${valor?.old_amount.toFixed(2)}
              </h1>
              <h1 className="text-white font-bold text-3xl ml-2 hidden sm:block">
                =
              </h1>
              <h1 className="bg-green-500 mx-3 px-2 py-1 rounded-md font-bold text-2xl text-white">
                {valor?.new_currency}
              </h1>
              <h1 className="font-bold text-3xl text-white">
                ${valor?.new_amount.toFixed(2)}
              </h1>
            </div>

            {/* --- */}
            <div className="">
              {/* OLD VALUES */}
              {/* <div className="container mx-auto flex justify-center my-2 items-center ">
                <h2 className="bg-red-500 mx-3 px-2 py-1 rounded-md font-bold text-2xl text-white">
                  {valor?.old_currency}
                </h2>
                <h1 className="font-bold text-3xl text-white">
                  ${valor?.old_amount.toFixed(2)}
                </h1>
              </div> */}
              {/* NEW VALUE */}
              {/* <div className="container mx-auto flex justify-center items-center  ">
                <h2 className="bg-green-500 mx-3 px-2 py-1 rounded-md font-bold text-2xl text-white">
                  {valor?.new_currency}
                </h2>
                <h1 className="font-bold text-3xl text-white">
                  ${valor?.new_amount.toFixed(2)}
                </h1>
              </div> */}

              {/* --- */}
            </div>
            <div className="flex items-center justify-center flex-col sm:flex-row text-xl sm:text-3xl">
              <h1 className=" ShadowFont flex justify-center items-center  text-white font-bold text-center mt-3">
                You have $
                <span
                  className={`${
                    valor.new_amount > valor.old_amount
                      ? "text-green-300"
                      : "text-red-300"
                  }   mr-2`}
                >
                  {valor.new_amount.toFixed(2)}
                </span>
                in
                <h1 className=" px-2 py-1 rounded-md font-bold text-white">
                  {valor?.new_currency}
                </h1>
              </h1>
            </div>
          </div>
        )}
        {!valor?.new_amount && (
          <div>
            <h1 className="ShadowFont text-white font-bold text-center text-3xl">
              Enter a Valid Value
            </h1>
          </div>
        )}
      </section>
    </div>
  );
}
