import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

function ThreeStep() {
  const location = useLocation();
  const { isYearly } = location.state || { isYearly: false };

  const [selectedAddOns, setSelectedAddOns] = useState({
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  });

  const toggleAddOn = (addOn) => {
    setSelectedAddOns({
      ...selectedAddOns,
      [addOn]: !selectedAddOns[addOn],
    });
  };

  const addOnPrices = {
    onlineService: isYearly ? "$10/yr" : "$1/mo",
    largerStorage: isYearly ? "$20/yr" : "$2/mo",
    customizableProfile: isYearly ? "$20/yr" : "$2/mo",
  };

  return (
    <>
      <div className="relative flex flex-col items-start gap-5 w-1/3 mt-12">
        <div className="w-full">
          <h1 className="text-[40px] text-denim font-bold">Pick add-ons</h1>
          <p className="text-gray-500">
            Add-ons help enhance your gaming experience.{" "}
          </p>
          <div className="mt-10 flex-col gap-4 flex">
            {Object.keys(selectedAddOns).map((addOn, index) => (
              <div
                key={index}
                className={`flex border items-center rounded-lg justify-between p-2 ${
                  selectedAddOns[addOn] ? "bg-blue-100" : ""
                }`}
                onClick={() => toggleAddOn(addOn)}
              >
                <div className="flex items-center gap-8">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                    checked={selectedAddOns[addOn]}
                    onChange={() => toggleAddOn(addOn)}
                  />
                  <span>
                    <h5 className="text-[15px] font-bold text-denim">
                      {addOn.replace(/([A-Z])/g, " $1")}
                    </h5>
                    <p className="text-gray-400">
                      {addOn === "onlineService"
                        ? "Access to multiplayer games"
                        : addOn === "largerStorage"
                        ? "Extra 1TB of cloud save"
                        : "Custom theme on your profile"}
                    </p>
                  </span>
                </div>
                <span className="text-sky-600">{addOnPrices[addOn]}</span>
              </div>
            ))}
          </div>
          <div>
            <Link
              to={"/fourthstep"}
              className="absolute bottom-0 right-0 bg-denim px-3 py-4 text-white font-bold rounded-lg"
              type="submit"
            >
              Next Step
            </Link>
            <Link
              to={"/secondstep"}
              className="absolute bottom-0 left-0 bg-gray-400 px-3 py-4 text-gray-800 font-bold rounded-lg"
            >
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThreeStep;
