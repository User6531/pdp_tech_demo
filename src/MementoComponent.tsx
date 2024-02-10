import { ChangeEvent, useState } from "react";

const MementoComponent = () => {
  const [text, setText] = useState("");
  const [history, setHistory] = useState<Array<string>>([]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const saveStateToHistory = () => {
    setHistory((prevHistory) => [...prevHistory, text]);
  };

  const undo = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1);
      const previousState = newHistory[newHistory.length - 1];
      setText(previousState);
      setHistory(newHistory);
    }
  };

  return (
    <>
      Allow to save and restore the previous state of an object
      <br />
      without revealing the details of its implementation.
      <div className="flex flex-col items-center gap-16 justify-evenly gap-4 mt-6">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your message
        </label>
        <textarea
          value={text}
          onChange={handleChange}
          id="message"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        />

        <br />
        <button
          onClick={saveStateToHistory}
          type="button"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Save
        </button>

        <button
          onClick={undo}
          type="button"
          className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
        >
          Undo
        </button>
      </div>
    </>
  );
};

export default MementoComponent;
