import { Link } from "react-router-dom";

function FourthStep() {
  return (
    <div className="relative flex flex-col items-start gap-5 w-1/3 mt-12">
      <div className="w-full">
        <h1 className="text-[40px] text-denim font-bold">Finishing Up</h1>
        <p className="text-gray-500">
          Double-check everything looks OK before confirming.{" "}
        </p>
        <div className="w-full p-5 rounded-lg gap-8 mt-10 bg-slate-100 flex flex-col ">
          <div className="flex items-center justify-between border-b pb-5">
            <h5 className="font-bold text-denim text-[19px]">
              Arcade (Monthly)
            </h5>
            <span>$9/mo</span>
          </div>
          <div className="flex items-center justify-between">
            <h5 className="text-gray-500">Online Service (Monthly)</h5>
            <span>+$1/mo</span>
          </div>
          <div className="flex items-center justify-between">
            <h5 className="text-gray-500">Larger Storage</h5>
            <span>$9/mo</span>
          </div>
          <div></div>
        </div>
        <div className="flex items-center justify-between mt-5">
          <h4>Total (per month)</h4>
          <span className="text-purple font-semibold">+$12/mo</span>
        </div>
      </div>
      <div>
        <Link
          to={"/fivestep"}
          className="absolute bottom-0 right-0 bg-purple px-3 py-4 text-white font-bold rounded-lg"
          type="submit"
        >
          Confirm
        </Link>
        <Link
          to={"/threestep"}
          className="absolute bottom-0 left-0 bg-gray-400 px-3 py-4 text-gray-800 font-bold rounded-lg"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
}

export default FourthStep;
