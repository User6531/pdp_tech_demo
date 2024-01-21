type TModalColorSingletonInstance = {
  color: "red" | "blue" | null;
  setRed: () => void;
  setBlue: () => void;
};

const modalColorSingleton = (function () {
  let instance: TModalColorSingletonInstance;

  function createModalColorInstance(): TModalColorSingletonInstance {
    return {
      color: null,
      setBlue: function () {
        this.color = "blue";
      },
      setRed: function () {
        this.color = "red";
      },
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createModalColorInstance();
      }
      return instance;
    },
  };
})();

export default modalColorSingleton;
