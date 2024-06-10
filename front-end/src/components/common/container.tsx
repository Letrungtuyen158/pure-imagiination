import React from "react";
type ContainerProps = {
  children: React.ReactNode;
};
const Container = ({ children }: ContainerProps) => {
  return (
    <div className="max-w-[1920px] mx-auto px-[35px] lg:px-[238px] xxl:px-0">
      {children}
    </div>
  );
};

export default Container;

