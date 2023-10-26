"use client";
import Header from "@/components/Header/page";
import { useEffect, useState } from "react";

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
    console.log(value, currentCurrency, currencyWanted);
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

  // useEffect(() => {

  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "x-rapidapi-key": "af717a7493mshc01c20613ca1544p1e2c2cjsn1d32fd48ed50",
  //     },
  //   };

  //   fetch(
  //     `https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=USD&want=EUR&amount=5000`,
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((response) => {
  //       console.log(response);
  //       console.log(old_cur);
  //       setValor(response);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <div className=" h-screen">
      <Header onCheckHowMuch={checkHowMuchFunction} />
      <div className="bg-white text-black ">
        valor {value} - oldCurr: {old_cur} - newCur: {new_cur}
      </div>
      <section className="py-20 h-full my-custom-class">
        <div className="container mx-auto flex justify-center items-center ">
          <h2 className="bg-green-500 mx-3 px-2 py-1 rounded-md font-bold text-2xl text-white">
            {valor?.new_currency}
          </h2>
          <h1 className="font-bold text-3xl text-white">{valor?.new_amount}</h1>
        </div>
        <div className="container mx-auto flex justify-center my-2 items-center ">
          <h2 className="bg-red-500 mx-3 px-2 py-1 rounded-md font-bold text-2xl text-white">
            {valor?.old_currency}
          </h2>
          <h1 className="font-bold text-3xl text-white">{valor?.old_amount}</h1>
        </div>
      </section>
    </div>
  );
}
