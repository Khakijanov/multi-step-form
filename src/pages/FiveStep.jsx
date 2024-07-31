import React from "react";

function FiveStep() {
  return (
    <div className="relative flex flex-col items-start  w-1/3 mt-12">
      <div className="flex w-full h-full justify-center items-center flex-col gap-10">
        <div className="flex flex-col items-center gap-5">
          <img
            width={150}
            src="../../public/assets/images/icon-thank-you.svg"
            alt=""
          />
          <h1 className=" font-bold text-center text-denim text-[30px]">
            Thank You
          </h1>
        </div>
        <p className="text-center">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
}

export default FiveStep;
