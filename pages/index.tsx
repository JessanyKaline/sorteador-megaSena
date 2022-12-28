import React from "react";

export default function Home() {
  const [result, setResult] = React.useState("");

  const getRandomInt: any = (
    min: number,
    max: number,
    numbersToExclude: number[]
  ) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const random = Math.floor(Math.random() * (max - min) + min);
    return numbersToExclude.includes(random)
      ? getRandomInt(min, max, numbersToExclude)
      : random;
  };

  const megaSena: any = (qt: number, numbers: string[] = []) => {
    numbers.push(getRandomInt(1, 61, numbers));
    return qt - 1 > 0 ? megaSena(qt - 1, numbers) : numbers.join('-');
  };

  return (
    <main className="bg-fireworks h-screen grid justify-items-center  ">
      <div className="bg-white/30 backdrop-blur-xl border-gray border-2 rounded-md w-6/12 h-2/4 grid justify-items-center my-20 space-y-5 outline-double outline-3 outline-offset-2">
        <h1 className="text-xl md:text-3xl text-center font-bold text-gray my-5  ">
          Sorteador de Números da Mega-da-Virada!
        </h1>
        <button
          className="text-white font-bold bg-yellow rounded-md w-6/12  
        transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 "
          onClick={() => setResult(megaSena(6))}
        >
          SORTEAR
        </button>
        <div className="box-border h-32 w-10/12  p-10  border-2 border-gray outline-double outline-3 outline-offset-2 rounded-md font-semibold text-base md:text-2xl text-center ">
          {result}
        </div>
      </div>
    </main>
  );
}
