import { ReactNode, useEffect, useState } from "react";

const AdapterComponent = () => {
  return (
    <>
      Adapter is a structural design pattern that allows objects
      <br />
      with incompatible interfaces to collaborate.
      <div className="flex flex-col items-center gap-16 justify-evenly gap-4 mt-6">
        <Controller>
          {({ user, isLoading }) =>
            isLoading ? (
              <div>loading...</div>
            ) : (
              <input
                className="peer block min-h-[auto] rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                defaultValue={user?.name}
              />
            )
          }
        </Controller>

        <Controller>
          {({ user, isLoading }) =>
            isLoading ? (
              <div>loading...</div>
            ) : (
              <div className="flex items-center gap-4">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://cdn.vectorstock.com/i/preview-1x/71/97/male-surgeon-doctor-avatar-character-vector-14777197.jpg"
                  alt=""
                />
                <div className="font-medium dark:text-white">
                  <div>{user?.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {user?.website}
                  </div>
                </div>
              </div>
            )
          }
        </Controller>

        <Controller>
          {({ user, isLoading }) =>
            isLoading ? (
              <div>loading...</div>
            ) : (
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-end px-4 pt-4">
                  <button
                    id="dropdownButton"
                    data-dropdown-toggle="dropdown"
                    className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                    type="button"
                  >
                    <span className="sr-only">Open dropdown</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 3"
                    >
                      <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-col items-center pb-10">
                  <img
                    className="w-24 h-24 mb-3 rounded-full shadow-lg"
                    src="https://cdn.vectorstock.com/i/preview-1x/71/97/male-surgeon-doctor-avatar-character-vector-14777197.jpg"
                    alt="Bonnie image"
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    {user?.name}
                  </h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {user?.website}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {user?.phone}
                  </span>
                  <div className="flex mt-4 md:mt-6">
                    <a className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Add friend
                    </a>
                    <a className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3">
                      Message
                    </a>
                  </div>
                </div>
              </div>
            )
          }
        </Controller>
      </div>
    </>
  );
};

type TUserState = {
  name: string;
  phone: string;
  username: string;
  website: string;
};

interface ControllerProps {
  children: (data: {
    user: TUserState | null;
    isLoading: boolean;
  }) => ReactNode;
}

function Controller({ children }: ControllerProps): ReactNode {
  const [user, setUser] = useState<TUserState | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      await fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => response.json())
        .then((json) => setUser(json));

      setIsLoading(false);
    })();
  }, []);

  return <>{children({ isLoading, user })}</>;
}

export default AdapterComponent;
