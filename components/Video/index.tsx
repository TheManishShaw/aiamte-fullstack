"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
// import ModalVideo from "react-modal-video";
const documentAi = [
  {
    id: 1,
    total: "110k+",
    icon: "",
    title:
      " Bank Statement Dataset(Synthetic) off the shelf trainning data for Document AI",
  },
  {
    id: 2,
    total: "140k+",
    icon: "",
    title:
      " Check/Cheque Dataset(Synthetic) off the shelf trainning data for Document AI",
  },
  {
    id: 3,
    total: " 100k+",
    icon: "",
    title:
      "  Payslips Dataset(Synthetic) off the shelf trainning data for Document AI",
  },
  {
    id: 4,
    total: "105k+",
    icon: "",
    title:
      " Taxform Dataset(Synthetic) off the shelf trainning data for Document AI",
  },
  {
    id: 5,
    total: "80k+",
    icon: "",
    title:
      "Loan Mortgage(Synthetic) off the shelf trainning data for Document AI",
  },
  {
    id: 6,
    total: "95k+",
    icon: "",
    title:
      " Insurance Claim(Synthetic) off the shelf trainning data for Document AI",
  },
];
const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="relative z-10 py-16 md:py-20 lg:py-0">
        <div className="container">
          <SectionTitle
            title="Our Expertise"
            paragraph="Our Document AI offers a diverse off-the-shelf dataset that includes bank statements, cheques, pay slips, insurance claims, loan and mortgage paperwork, and tax forms. This extensive collection addresses a wide range of use cases in Document AI, offering a sufficient training material for applications like as Optical Character Recognition (OCR) and Named Entity Recognition. This dataset allows developers to improve the accuracy and versatility of their models, ensuring strong performance across a wide range of document types in industries such as banking, insurance, and compliance. "
            center
            mb="80px"
          />
          <div className=" py-4 mx-auto lg:py-6 md:px-6">
            <div className="flex flex-wrap ">
              <div className="w-full px-4 mb-10 lg:w-2/5 lg:mb-0 ">
                <div className="lg:max-w-md">
                  <div className="px-4 pl-4 mb-6 border-l-4 border-blue-500">
                    <span className="text-sm text-gray-600 uppercase dark:text-gray-400">
                      Off The Shelf Dataset for
                    </span>
                    <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                      Document AI
                    </h1>
                  </div>
                  {/* <p className="px-4 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam Lorem ipsum dolor sit amet.
                </p> */}
                  <div className="flex flex-wrap items-center">
                    {documentAi.map((document) => (
                      <div
                        key={document.id}
                        className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6"
                      >
                        <div className="p-6 bg-white dark:bg-gray-900 rounded-xl">
                          <span className="text-white-200 dark:text-white-200">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              className="w-10 h-10"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                              <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                            </svg>
                          </span>
                          <p className="mt-4 mb-2 text-3xl font-bold text-gray-200 dark:text-gray-200">
                            {document.total}
                          </p>
                          <h2 className="text-sm text-gray-700 dark:text-gray-400">
                            {document.title}
                          </h2>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full px-4 mb-10 lg:w-3/5 lg:mb-0">
                <div className="columns-1 gap-5 sm:columns-2 sm:gap-8  [&>img:not(:first-child)]:mt-8">
                  <img
                    src="/images/Account Statement.png"
                    className="relative z-40 object-cover w-full h-full  rounded"
                  />
                  <img
                    src="/images/Check Annotation.png"
                    className="relative z-40 object-cover w-full h-full rounded"
                  />
                  <img
                    src="/images/Salary slip.png"
                    className="relative z-40 object-cover w-full h-full rounded"
                  />
                  <img
                    src="/images/Check Annotation.png"
                    className="relative z-40 object-cover w-full h-full rounded"
                  />
                  <img
                    src="/images/Salary slip.png"
                    className="relative z-40 object-cover w-full h-full rounded"
                  />
                  <img
                    src="/images/Account Statement.png"
                    className="relative z-40 object-cover w-full h-full  rounded"
                  />
                </div>
                {/* <img
                  src="https://i.postimg.cc/9MW8G96J/pexels-the-coach-space-2977565.jpg"
                  alt=""
                  className="relative z-40 object-cover w-full h-full rounded"
                /> */}
              </div>
            </div>
          </div>

          {/* <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
                data-wow-delay=".15s"
              >
                <div className="relative aspect-[77/40] items-center justify-center">
                  <Image src="/images/video/video.jpg" alt="video image" fill />
                  <div className="absolute top-0 right-0 flex h-full w-full items-center justify-center">
                    <button
                      onClick={() => setOpen(true)}
                      className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                    >
                      <svg
                        width="16"
                        height="18"
                        viewBox="0 0 16 18"
                        className="fill-current"
                      >
                        <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        {/* <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="al7EYfWKuVg"
        onClose={() => setOpen(false)}
      /> */}

        {/* <div className="absolute bottom-0 left-0 right-0 z-[-1]">
          <img src="/images/video/shape.svg" alt="shape" className="w-full" />
        </div> */}
      </section>
    </>
  );
};

export default Video;
