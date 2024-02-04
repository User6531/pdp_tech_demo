import { useState } from "react";
import modalColorSingleton from "./modalColorSingleton";

const Singleton = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      Singleton is a creational design pattern
      <br />
      that lets be ensure that a class has only one instance,
      <br />
      while providing a global access point to this instance.
      <div className="flex justify-evenly gap-4 mt-6">
        <Modal show={showModal} onClose={() => setShowModal(false)} />
        <BlueButton />
        <OpenModalButton onOpen={() => setShowModal(true)} />
        <RedButton />
      </div>
    </>
  );
};

function Modal({ show, onClose }: { show: boolean; onClose: () => void }) {
  const modalColorInstance = modalColorSingleton.getInstance();
  const { color } = modalColorInstance;

  return (
    <div
      id="modelConfirm"
      className={`${
        show ? "block" : "hidden"
      } fixed  z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4`}
    >
      <div className="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md">
        <div className="flex justify-end p-2">
          <button
            onClick={onClose}
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div className="p-6 pt-0 text-center">
          <svg
            className={`w-20 h-20 mx-auto`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: color ?? "transparent" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <h3 className="text-xl font-normal text-gray-500 mt-5 mb-6">
            {color ? `Modal use ${color} color` : "Color was not set"}
          </h3>

          <button
            onClick={onClose}
            className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function OpenModalButton({ onOpen }: { onOpen: () => void }) {
  return (
    <div>
      <button
        onClick={onOpen}
        type="button"
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-teal-500 text-white hover:bg-teal-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      >
        Open Modal
      </button>
    </div>
  );
}

function RedButton() {
  const modalColorInstance = modalColorSingleton.getInstance();

  const handleCloseModal = () => {
    modalColorInstance.setRed();
  };

  return (
    <div>
      <button
        onClick={handleCloseModal}
        type="button"
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      >
        Set Red Color
      </button>
    </div>
  );
}

function BlueButton() {
  const modalColorInstance = modalColorSingleton.getInstance();

  const handleCloseModal = () => {
    modalColorInstance.setBlue();
  };

  return (
    <div>
      <button
        onClick={handleCloseModal}
        type="button"
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      >
        Set Blue Color
      </button>
    </div>
  );
}

export default Singleton;
