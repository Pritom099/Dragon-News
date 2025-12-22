import React from "react";
import { FaStar, FaRegStar, FaEye, FaBookmark, FaShareAlt } from "react-icons/fa";
import { format } from "date-fns";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    image_url,
    details,
    rating,
    total_view,
  } = news;

  return (
    <div className="card bg-base-100  rounded-lg shadow-xl">
    
      {/* Author section */}
      <div className="flex items-center justify-between bg-base-200 px-4 py-3 rounded-t-lg">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">
              {format(new Date(author.published_date), "yyyy-MM-dd")}
            </p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-500">
          <FaBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Body */}
      <div className="card-body p-4">
        <h2 className="card-title text-lg font-bold leading-snug">
          {title}
        </h2>

        <figure className="my-3">
          <img
            src={image_url}
            alt={title}
            className="rounded-md w-full"
          />
        </figure>

        <p className="text-sm text-gray-600">
          {details.slice(0, 180)}...
          <span className="text-secondary font-semibold cursor-pointer">
            {" "}Read More
          </span>
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4">
          
          {/* Rating */}
          <div className="flex items-center gap-1 text-orange-400">
            {
              [...Array(5)].map((_, index) =>
                index < rating.number ? (
                  <FaStar key={index} />
                ) : (
                  <FaRegStar key={index} />
                )
              )
            }
            <span className="ml-2 text-sm text-gray-600">
              {rating.number}
            </span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <FaEye />
            {total_view}
          </div>

        </div>
      </div>
    </div>
  );
};

export default NewsCard;
