import { useState } from "react";

type Wallet = {
  id: number;
  name: string;
  isSecure: boolean;
  iconUrl?: string;
};

class WalletInstance {
  id: Wallet["id"];
  name: Wallet["name"];
  isSecure: Wallet["isSecure"];

  constructor(name: string, id: number = 1, isSecure: boolean = true) {
    this.id = id;
    this.name = name;
    this.isSecure = isSecure;
  }
}

export class WalletBuilder {
  user: Wallet;
  constructor(userName = "") {
    this.user = new WalletInstance(userName);
  }

  setId(id: Wallet["id"]) {
    this.user.id = id;
    return this;
  }

  setName(name: Wallet["name"]) {
    this.user.name = name;
    return this;
  }

  setIsSecure(isSecure: Wallet["isSecure"]) {
    this.user.isSecure = isSecure;
    return this;
  }

  build() {
    return this.user;
  }
}

const BuilderComponent = () => {
  const [wallets, setWallets] = useState<Wallet[]>([
    {
      id: 1,
      isSecure: true,
      name: "MetaMask",
      iconUrl:
        "https://forum.zeroqode.com/uploads/default/original/2X/4/401498d7adfbb383fea695394f4f653ea4e7c9a7.png",
    },
    {
      id: 2,
      isSecure: true,
      name: "Coinbase Wallet",
      iconUrl:
        "https://static-00.iconduck.com/assets.00/coinbase-icon-512x512-rgejvkzh.png",
    },
    {
      id: 3,
      isSecure: false,
      name: "Opera Wallet",
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Opera_2015_icon.svg/512px-Opera_2015_icon.svg.png",
    },
  ]);

  const handleNewWaller = (wallet: Wallet) => {
    const newWallet = new WalletBuilder()
      .setName(wallet.name)
      .setId(wallet.id)
      .setIsSecure(wallet.isSecure)
      .build();

    setWallets((prev) => [...prev, newWallet]);
  };

  return (
    <>
      Builder is a creational design pattern that lets us construct complex
      objects step by step.
      <br />
      The pattern allows us to produce different types and representations of an
      object using the same construction code.
      <div className="flex justify-evenly gap-4 mt-6">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
            Connect wallet
          </h5>
          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Connect with one of our available wallet providers.
          </p>
          <ul className="my-4 space-y-3">
            {wallets.map(({ id, isSecure, name, iconUrl }) => (
              <li key={id}>
                <a
                  href="#"
                  className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                >
                  <img
                    src={
                      iconUrl ??
                      "https://upload.wikimedia.org/wikipedia/commons/a/a1/Wallet_App_icon_iOS_12.png"
                    }
                    alt={name}
                    style={{
                      width: "24px",
                    }}
                  />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    {name}
                    {isSecure ? " ✅" : " ❌"}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Or create a new one.
          </p>
          <AddForm add={handleNewWaller} />
        </div>
      </div>
    </>
  );
};

function AddForm({ add }: { add: (wallet: Wallet) => void }) {
  const [state, setState] = useState<Wallet>({
    id: new Date().getMilliseconds(),
    isSecure: false,
    name: "",
  });

  return (
    <form className="max-w-sm mx-auto">
      <div className="mb-5">
        <input
          onChange={(e) =>
            setState((prev) => ({ ...prev, name: e.target.value }))
          }
          value={state.name}
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Wallet Name"
          required
        />
      </div>
      <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input
            checked={state.isSecure}
            onChange={(e) =>
              setState((prev) => ({ ...prev, isSecure: e.target.checked }))
            }
            id="remember"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            required
          />
        </div>
        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Is Secure
        </label>
      </div>
      <button
        onClick={() => add(state)}
        disabled={!state.name}
        type="button"
        className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      >
        Add Wallet
      </button>
    </form>
  );
}

export default BuilderComponent;
