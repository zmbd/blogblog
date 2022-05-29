import React from "react";

const NavigationButton = (props: any) => {
  const { children, currentPage, breakpoint, handlePageChange } = props;

  let style = "hover:text-white hover:cursor-pointer hover:bg-primary-100";
  if (currentPage === breakpoint) style = "bg-primary-whitegray select-none";

  const handleChange = () => {
    if (breakpoint === 1) handlePageChange(1);
    else handlePageChange(breakpoint);
  };

  return (
    <div
      onClick={() => handleChange()}
      className={`${style} w-10 h-10 mr-1 text-primary-600  flex justify-center items-center rouded-sm border text-lg`}
    >
      {children}
    </div>
  );
};

export default NavigationButton;
