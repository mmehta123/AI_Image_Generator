import React from "react";
import { downloadPhoto } from "../../utils";
import { download } from "../../assets";

const Card = ({ _id, prompt, photo, name }) => {
  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
      <img
        src={photo}
        alt={photo}
        className="rounded-xl w-full h-auto object-cover"
      />
      <div
        className="group-hover:flex flex-col max-h-[94.5%]
      hidden absolute bottom-0 right-0 left-0 bg-[#10131f] m-2 p-4 rounded-md"
      >
        <p className="text-white text-sm overflow-y-hidden">{prompt}</p>
        <div className="flex justify-between items-center mt-1">
          <div className="flex gap-2 items-center">
            <div className="w-7 h-7 rounded-2xl font-semibold text-white bg-green-700 flex items-center justify-center">
              {name[0].toUpperCase()}
            </div>
            <p className="text-white font-thin">{name}</p>
          </div>
          <button onClick={()=>downloadPhoto(_id,photo) } className="border-none outline-none bg-transparent">
            <img src={download} alt="download" className="h-7 w-7 rounded-xl invert object-contain"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
