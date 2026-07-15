import { useState } from "react";
import data from "../data.json";

const Glasses = () => {
  const glassesStore = data;
  const [selectedGlass, setSelectedGlass] = useState(glassesStore[0]);

  const renderGlassesList = () => {
    return glassesStore.map((item) => {
      return (
        <img
          onClick={() => setSelectedGlass(item)}
          key={item.id}
          src={item.url}
          alt={item.name}
          className="h-14 cursor-pointer border border-gray-300 p-1"
        />
      );
    });
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-[url('./glassesImage/background.jpg')]">
      <div className="min-h-screen bg-black/20">
        <div className="bg-black/30 py-5">
          <h1 className="text-center text-3xl font-bold tracking-wider text-white">
            TRY GLASSES APP ONLINE
          </h1>
        </div>

        <div className="mx-auto mt-12 flex max-w-5xl justify-center gap-32">
          <div className="relative w-70">
            <img
              src="./glassesImage/model.jpg"
              alt="model"
              className="w-full bg-white object-cover"
            />

            <img
              src={selectedGlass.url}
              alt="glasses"
              className="absolute left-1/2 top-22.5 w-42.5 -translate-x-1/2 opacity-70"
            />

            <div className="absolute bottom-0 left-0 w-full bg-orange-300/80 p-4">
              <h3 className="text-xl font-bold text-indigo-700">
                {selectedGlass.name}
              </h3>

              <p className="mt-2 text-sm font-semibold text-white">
                {selectedGlass.desc}
              </p>
            </div>
          </div>

          <div className="w-70">
            <img
              src="./glassesImage/model.jpg"
              alt="model"
              className="w-full bg-white object-cover"
            />
          </div>
        </div>

        <div className="mx-auto mt-12 w-[75%] bg-white p-8">
          <div className="flex flex-wrap justify-center gap-5">
            {renderGlassesList()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Glasses;
