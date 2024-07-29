import { Link } from "react-router-dom"

function ThreeStep() {
  return (
       <>
      <div className="relative flex flex-col items-start gap-5 w-1/3 mt-12">
        <div className="w-full">
          <h1 className="text-[40px] text-denim font-bold">Pick add-ons</h1>
          <p className="text-gray-500">Add-ons help enhance your gaming experience. </p>
          <div className="mt-10 flex-col gap-4 flex">
            <div className="flex border items-center rounded-lg justify-between p-2">
           <div className="flex items-center gap-8">
           <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
            
            <span>
            <h5 className="text-[15px] font-bold text-denim">
              Online service
            </h5>
            <p className="text-gray-400">
            Access to multiplayer games
            </p>
          </span>
           </div>
            <span className="text-sky-600">
              +$1/mo
            </span>
           
            </div>
            <div className="flex border items-center rounded-lg justify-between p-2">
           <div className="flex items-center gap-8">
           <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
            
            <span>
            <h5 className="text-[15px] font-bold text-denim">
              Online service
            </h5>
            <p className="text-gray-400">
            Access to multiplayer games
            </p>
          </span>
           </div>
            <span className="text-sky-600">
              +$1/mo
            </span>
           
            </div>
            <div className="flex border items-center rounded-lg justify-between p-2">
           <div className="flex items-center gap-8">
           <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
            
            <span>
            <h5 className="text-[15px] font-bold text-denim">
              Online service
            </h5>
            <p className="text-gray-400">
            Access to multiplayer games
            </p>
          </span>
           </div>
            <span className="text-sky-600">
              +$1/mo
            </span>
           
            </div>
          </div>
          <div>
          <Link to={'/threestep'} className="absolute bottom-0 right-0 bg-denim px-3 py-4 text-white font-bold rounded-lg" type="submit">
            Next Page
          </Link>
          <Link to={'/secondstep'} className="absolute bottom-0 left-0 bg-gray-400 px-3 py-4 text-gray-800 font-bold rounded-lg">
            Go Back
          </Link>
        </div>
        </div>
      </div>
    </>
    
  )
}

export default ThreeStep