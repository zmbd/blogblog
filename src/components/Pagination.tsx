import React from "react";
import { articlesPerPage } from "../functions/pagination";

const Pagination = (props: any) => {
  const { posts, currentPage, handlePageChange } = props;

  const pages: number[] = [];
  for (let i = 0; i < Math.ceil(posts / articlesPerPage); i++) {
    pages.push(i + 1);
  }

  return (
    <div className="md:w-96 h-11 flex flex-row justify-start items-center">
      {pages.map((page: any, i: number) => {
        return (
          <div
            key={i}
            onClick={() => handlePageChange(page)}
            className={`w-10 h-10 ${
              currentPage === i + 1
                ? "bg-primary-100 text-white hover:cursor-default"
                : "bg-white text-primary-600 hover:bg-primary-100 hover:text-white "
            } cursor-pointer first:ml-1 mr-1 last:mr-0 flex justify-center items-center rounded-sm border`}
          >
            {page}
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;
