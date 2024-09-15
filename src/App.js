import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJoke } from "./jokeslice";

export default function App() {
  const [category, setCategory] = useState("");
  const jokes = useSelector((state) => state.joke.joke);
  const codestatus = useSelector((state) => state.joke.codevalue);
  const buttonstatus = useSelector((state) => state.joke.button);

  const dispatch = useDispatch();

  const handleInput = (e) => {
    setCategory(e.target.value);
  };

  const handleJoke = () => {
    dispatch(fetchJoke(category));
  };

  return (
    <>
      <div className="bg-customColor w-full h-screen flex items-center justify-center">
        <div className="text-xl text-white">
          <div className="flex justify-center">
            <input
              onChange={handleInput}
              value={category}
              className="border border-r-0 rounded-l-md border-transparent outline-none text-base px-3 py-2 text-black"
              placeholder="Enter the category"
            />
            <button
              onClick={handleJoke}
              className="bg-customColor2 px-4 py-2 border border-black rounded-r-md border-l-0">
              {buttonstatus}
            </button>
          </div>

          <div className="mt-6 p-4 text-white  max-w-xl mx-auto flex flex-col gap-4 justify-center items-center text-center">
            <h2 className="text-xl font-semibold p-4 rounded-md shadow-transparent bg-blue-950 italic animate-fade-in">
              {jokes}
            </h2>
            {codestatus === true && (
              <p className="text-green-500">Joke fetched successfully!</p>
            )}
            {codestatus === false && (
              <p className="text-red-500"> Please check the category.</p>
            )}
            {codestatus === null && (
              <p className="text-gray-500">
                Enter a category [ animal, career, celebrity, dev,
                explicit, fashion, food, history, money, movie,
                music, political, religion, science, sport, travel ]
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
