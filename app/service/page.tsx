import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features";
import React from "react";

const page = () => {
  return (
    <>
      <Breadcrumb
        pageName="Services"
        description="Aimate offer a complete range of training data services"
      />
      <Features />
    </>
  );
};

export default page;
