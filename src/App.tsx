import { useState } from "react";
import Singleton from "./SingletonComponent";

type TType = "singleton";

function App() {
  const [type, setType] = useState<TType>("singleton");

  return (
    <div className="w-screen h-screen bg-gray-700 flex items-center justify-center text-white">
      <div className="flex flex-col">
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="me-2">
            <button
              className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
              onClick={() => setType("singleton")}
            >
              Singleton
            </button>
          </li>
          <li className="me-2">
            <button className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">
              Module
            </button>
          </li>
          <li className="me-2">
            <button className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">
              Observer
            </button>
          </li>
          <li className="me-2">
            <button className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">
              Factory
            </button>
          </li>
        </ul>
        <div className="w-full p-4 dark:bg-gray-800">{getBody(type)}</div>
      </div>
    </div>
  );
}

function getBody(type: TType) {
  switch (type) {
    case "singleton":
      return <Singleton />;

    default:
      return null;
  }
}

export default App;
