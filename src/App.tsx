import { useState } from "react";
import packageJson from "../package.json";
import SingletonComponent from "./SingletonComponent";
import AdapterComponent from "./AdapterComponent";
import ObserverComponent from "./ObserverComponent";
import BuilderComponent from "./BuilderComponent";
import DecoratorComponent from "./DecoratorComponent";
import MementoComponent from "./MementoComponent";

type TCatalog = "creational" | "structural" | "behavioral";

function App() {
  const [catalog, setCatalog] = useState<TCatalog>("creational");

  return (
    <div className="w-screen h-screen bg-gray-700 flex items-center justify-center text-white text-center">
      <div className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg fixed bottom-0 left-0">
        v{packageJson.version}
      </div>
      <div className="flex flex-col">
        <div className="flex rounded shadow fixed bottom-0 left-2/4 -translate-x-1/2">
          <button
            className={`w-full flex justify-center font-medium rounded-l px-5 py-2 border ${
              catalog === "creational"
                ? "bg-gray-900 text-white  border-gray-900"
                : "bg-white text-gray-800 border-gray-200 hover:bg-gray-100"
            }`}
            onClick={() => setCatalog("creational")}
          >
            Creational
          </button>

          <button
            onClick={() => setCatalog("structural")}
            className={`w-full flex justify-center font-medium rounded-l px-5 py-2 border ${
              catalog === "structural"
                ? "bg-gray-900 text-white  border-gray-900"
                : "bg-white text-gray-800 border-gray-200 hover:bg-gray-100"
            }`}
          >
            Structural
          </button>

          <button
            onClick={() => setCatalog("behavioral")}
            className={`w-full flex justify-center font-medium rounded-l px-5 py-2 border ${
              catalog === "behavioral"
                ? "bg-gray-900 text-white  border-gray-900"
                : "bg-white text-gray-800 border-gray-200 hover:bg-gray-100"
            }`}
          >
            Behavioral
          </button>
        </div>

        <CatalogBody catalog={catalog} />
      </div>
    </div>
  );
}

function CatalogBody({ catalog }: { catalog: TCatalog }) {
  switch (catalog) {
    case "behavioral":
      return <BehavioralCatalog />;

    case "creational":
      return <CreationalCatalog />;

    case "structural":
      return <StructuralCatalog />;

    default:
      return null;
  }
}

type TCreationalType = "singleton" | "builder";
function CreationalCatalog() {
  const [type, setType] = useState<TCreationalType>("singleton");
  return (
    <>
      <ul className="flex flex-wrap justify-center text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        <li className="me-2">
          <button
            className={`inline-block p-4 ${
              type === "singleton"
                ? "text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
                : "rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            }`}
            onClick={() => setType("singleton")}
          >
            Singleton
          </button>
        </li>
        <li className="me-2">
          <button
            className={`inline-block p-4 ${
              type === "builder"
                ? "text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
                : "rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            }`}
            onClick={() => setType("builder")}
          >
            Builder
          </button>
        </li>
      </ul>
      <div className="w-full p-4 dark:bg-gray-800">
        {(() => {
          switch (type) {
            case "singleton":
              return <SingletonComponent />;

            case "builder":
              return <BuilderComponent />;

            default:
              return null;
          }
        })()}
      </div>
    </>
  );
}

type TStructuralType = "adapter" | "decorator";
function StructuralCatalog() {
  const [type, setType] = useState<TStructuralType>("adapter");
  return (
    <>
      <ul className="flex flex-wrap justify-center text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        <li className="me-2">
          <button
            className={`inline-block p-4 ${
              type === "adapter"
                ? "text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
                : "rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            }`}
            onClick={() => setType("adapter")}
          >
            Adapter
          </button>
        </li>
        <li className="me-2">
          <button
            className={`inline-block p-4 ${
              type === "decorator"
                ? "text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
                : "rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            }`}
            onClick={() => setType("decorator")}
          >
            Decorator
          </button>
        </li>
      </ul>
      <div className="w-full p-4 dark:bg-gray-800">
        {(() => {
          switch (type) {
            case "adapter":
              return <AdapterComponent />;

            case "decorator":
              return <DecoratorComponent />;

            default:
              return null;
          }
        })()}
      </div>
    </>
  );
}

type TBehavioralType = "observer" | "memento";
function BehavioralCatalog() {
  const [type, setType] = useState<TBehavioralType>("observer");
  return (
    <>
      <ul className="flex flex-wrap justify-center text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        <li className="me-2">
          <button
            className={`inline-block p-4 ${
              type === "observer"
                ? "text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
                : "rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            }`}
            onClick={() => setType("observer")}
          >
            Observer
          </button>
        </li>
        <li className="me-2">
          <button
            className={`inline-block p-4 ${
              type === "memento"
                ? "text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
                : "rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            }`}
            onClick={() => setType("memento")}
          >
            Memento
          </button>
        </li>
      </ul>
      <div className="w-full p-4 dark:bg-gray-800">
        {(() => {
          switch (type) {
            case "observer":
              return <ObserverComponent />;

            case "memento":
              return <MementoComponent />;

            default:
              return null;
          }
        })()}
      </div>
    </>
  );
}

export default App;
