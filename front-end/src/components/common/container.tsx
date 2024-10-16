import React from "react";
type ContainerProps = {
  children: React.ReactNode;
};
const Container = ({ children }: ContainerProps) => {
  return <div className="max-w-[1920px] mx-auto px-[35px] lg:px-[80px] xl:px-[238px]  ">{children}</div>;
};

export default Container;
