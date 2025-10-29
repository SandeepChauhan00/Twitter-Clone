import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";

const FeedCard: React.FC = () => {
  return (
    <div className="border border-r-0 border-l-0 border-b-0 border-gray-400 p-5 hover:bg-gray-900 cursor-pointer">
      <div className="grid grid-cols-12">
        <div className="col-span-1">
          <img className="rounded-4xl"
            src="https://avatars.githubusercontent.com/u/197642350?v=4"
            alt="User-Image"
            height={50}
            width={50}
          />
        </div>
        <div className="col-span-11 pl-2">
          <h5>Sandeep Chauhan</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            iste quod error maiores deleniti illum architecto molestiae tenetur
            amet? Recusandae veritatis veniam nemo 
          </p>
		  <div className="flex justify-between mt-5 text-xl items-center w-[90%]">
			<div>
			   <BiMessageRounded/>
			</div>
			<div>
			   <FaRetweet/>
			</div>
			<div>
			   <AiOutlineHeart/>
			</div>
			<div>
			   <BiUpload/>
			</div>
		  </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
