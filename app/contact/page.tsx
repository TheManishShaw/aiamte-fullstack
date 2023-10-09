import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Contact us for inquiries, support, or collaboration opportunities. We're here to assist you and look forward to hearing from you"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
