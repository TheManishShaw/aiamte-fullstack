import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features";
import HealthCareSection from "@/components/healthcare/HealthCareSection";
import { HealthcareSectionData } from "@/components/healthcare/healthcarwData";

const Healthcare = () => {
  return (
    <>
      <Breadcrumb
        pageName="Health Care"
        description="Healthcare AI empowers medical professionals with data-driven insights and automation"
      />
      <HealthCareSection />
      <Features />
    </>
  );
};

export default Healthcare;
