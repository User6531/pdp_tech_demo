import { useState } from "react";

const withToggle = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return function WithToggle(props: P) {
    const [isVisible, setIsVisible] = useState(true);

    return (
      <div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isVisible}
            className="sr-only peer"
            onChange={(e) => setIsVisible(e.target.checked)}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Toggle Visibility
          </span>
        </label>

        {isVisible && <WrappedComponent {...props} />}
      </div>
    );
  };
};

const TweetyComp = () => {
  return (
    <img
      style={{
        width: "150px",
      }}
      src="https://www.freeiconspng.com/uploads/cute-tweety-cartoon-characters-png-21.png"
      alt=""
    />
  );
};

const DecoratorComponent = () => {
  const EnhancedTweetyComp = withToggle(TweetyComp);

  return (
    <>
      Decorator is a structural pattern that allows adding new behaviors
      <br />
      to objects dynamically by placing them inside special wrapper objects,
      called decorators.
      <br />
      with incompatible interfaces to collaborate.
      <div className="flex items-center gap-16 justify-evenly gap-4 mt-6">
        <TweetyComp />
        <EnhancedTweetyComp />
      </div>
    </>
  );
};

export default DecoratorComponent;
