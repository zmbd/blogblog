import React, { useEffect, useState } from "react";
import { ARTICLES_PER_PAGE } from "../constants/constants";
import NavigationButton from "./NavigationButton";
import {featuredPages} from "../functions/featuredPages";

const Pagination = (props: any) => {
  const { posts, currentPage, handlePageChange } = props;
  const [pageTracker, setPageTracker] = useState<number[]>(
    featuredPages(posts, currentPage)
  );

  const handlePageTransition = (newPage: number) => {
    handlePageChange(newPage);
  };

  useEffect(() => {
    setPageTracker(featuredPages(posts, currentPage));
  }, [currentPage]);

  return (
    <div className="md:w-96 h-11 flex flex-row justify-center items-center md:mt-40 mb-10">
      <NavigationButton
        currentPage={currentPage}
        breakpoint={1}
        handlePageChange={handlePageChange}
      >
        &laquo;
      </NavigationButton>
      {pageTracker.map((page: any, i: number) => {
        return (
          <div
            key={i}
            onClick={() => handlePageTransition(page)}
            className={`w-10 h-10 ${
              currentPage === page
                ? "bg-primary-100 text-white hover:cursor-default"
                : "bg-white text-primary-600 hover:bg-primary-100 hover:text-white "
            } cursor-pointer first:ml-1 mr-1 last:mr-0 flex justify-center items-center rounded-sm border`}
          >
            {page}
          </div>
        );
      })}
      <NavigationButton
        currentPage={currentPage}
        breakpoint={Math.ceil(posts / ARTICLES_PER_PAGE)}
        handlePageChange={handlePageChange}
      >
        &raquo;
      </NavigationButton>
    </div>
  );
};

export default Pagination;
