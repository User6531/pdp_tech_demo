import { useEffect, useState } from "react";

type TTemperatureObserver = (temperature: number) => void;

class WeatherSubject {
  private observers: TTemperatureObserver[] = [];

  public attach(observer: TTemperatureObserver) {
    this.observers.push(observer);
  }

  public detach(observerToRemove: TTemperatureObserver) {
    this.observers = this.observers.filter(
      (observer) => observerToRemove.name !== observer.name
    );
  }

  public updateWeather() {
    const temperatures = this.fetchWeather();
    this.notify(temperatures);
  }

  private notify(temperature: number[]) {
    this.observers.forEach((observer, i) => observer(temperature[i]));
  }

  private fetchWeather() {
    const res = [];
    for (let i = 0; i < 3; i++) {
      res.push(Math.floor(Math.random() * (40 - -10 + 1)) + -10);
    }
    return res;
  }
}

const weatherSubject = new WeatherSubject();

const ObserverComponent = () => {
  const updateWeather = () => weatherSubject.updateWeather();

  return (
    <>
      Observer is a pattern that lets you define a subscription mechanism
      <br />
      to notify multiple objects about any events that happen to the object
      they`re observing.
      <div className="flex flex-col items-center gap-16 justify-evenly gap-4 mt-6">
        <div className="max-w-sm rounded overflow-hidden shadow-lg border border-sky-500 p-2 flex flex-col items-center">
          <img
            className="w-36"
            src="https://t4.ftcdn.net/jpg/05/82/75/73/360_F_582757323_kzGtwh1LTpcWmYTImYcho1foiN1F5zRs.jpg"
            alt="Sunset in the mountains"
          />
          <div className="">
            <div className="font-bold text-sm mb-2">Meteo-Org</div>
            <div>
              <button
                onClick={updateWeather}
                type="button"
                className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              >
                Update Weather
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-16 justify-evenly gap-4 mt-6">
          <CityA />
          <CityB />
          <CityC />
        </div>
      </div>
    </>
  );
};

function CityA() {
  const [currentTemperature, setCurrentTemperature] = useState<
    number | undefined
  >(undefined);

  const onTemperatureUpdatedCityA = (temperature: number) => {
    setCurrentTemperature(temperature);
  };

  const subscribe = () => weatherSubject.attach(onTemperatureUpdatedCityA);
  const unsubscribe = () => weatherSubject.detach(onTemperatureUpdatedCityA);

  useEffect(() => {
    subscribe();

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border border-sky-500 p-2 flex flex-col items-center">
      <img
        className="w-36"
        src="https://toposmagazine.com/wp-content/uploads/2023/07/shanghai_road-trip-with-raj-py8eyAh9J3A-unsplash-scaled.jpg"
        alt="Sunset in the mountains"
      />
      <div className="">
        <div className="font-bold text-sm mb-2">
          City A (temperature: {currentTemperature + " °C" ?? "N/A"})
        </div>
        <div>
          <button
            type="button"
            onClick={subscribe}
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            subscribe
          </button>
          <button
            type="button"
            onClick={unsubscribe}
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            unsubscribe
          </button>
        </div>
      </div>
    </div>
  );
}

function CityB() {
  const [currentTemperature, setCurrentTemperature] = useState<
    number | undefined
  >(undefined);

  const onTemperatureUpdatedCityB = (temperature: number) => {
    setCurrentTemperature(temperature);
  };

  const subscribe = () => weatherSubject.attach(onTemperatureUpdatedCityB);
  const unsubscribe = () => weatherSubject.detach(onTemperatureUpdatedCityB);

  useEffect(() => {
    subscribe();

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border border-sky-500 p-2 flex flex-col items-center">
      <img
        className="w-36"
        src="https://mustdonewzealand.co.nz/wp-content/uploads/2016/10/Whakawera-Rotoruas-living-maori-village-aerial-over-geothermal-valley.jpg"
        alt="Sunset in the mountains"
      />
      <div className="">
        <div className="font-bold text-sm mb-2">
          City B (temperature: {currentTemperature + " °C" ?? "N/A"})
        </div>
        <div>
          <button
            type="button"
            onClick={subscribe}
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            subscribe
          </button>
          <button
            type="button"
            onClick={unsubscribe}
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            unsubscribe
          </button>
        </div>
      </div>
    </div>
  );
}

function CityC() {
  const [currentTemperature, setCurrentTemperature] = useState<
    number | undefined
  >(undefined);

  const onTemperatureUpdatedCityC = (temperature: number) => {
    setCurrentTemperature(temperature);
  };

  const subscribe = () => weatherSubject.attach(onTemperatureUpdatedCityC);
  const unsubscribe = () => weatherSubject.detach(onTemperatureUpdatedCityC);

  useEffect(() => {
    subscribe();

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border border-sky-500 p-2 flex flex-col items-center">
      <img
        className="w-36"
        src="https://media.istockphoto.com/id/1193335188/photo/zurich-view-of-the-city-embankment-and-the-facades-of-old-houses.jpg?s=612x612&w=0&k=20&c=BhIXgQrOAA9rH_YEeqUg8GmSYlbkXn-gXQsXYpAl15k="
        alt="Sunset in the mountains"
      />
      <div className="">
        <div className="font-bold text-sm mb-2">
          City C (temperature: {currentTemperature + " °C" ?? "N/A"})
        </div>
        <div>
          <button
            type="button"
            onClick={subscribe}
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            subscribe
          </button>
          <button
            type="button"
            onClick={unsubscribe}
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            unsubscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default ObserverComponent;
