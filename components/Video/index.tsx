"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
// import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="relative z-10 py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="We are ready to help"
            paragraph="At Aimate, we offer a complete range of training data services i.e. AI Data Collection & Licensing, Data Annotation & Labeling, Data De-identification, Data Transcription and more to meet your specific machine learning and AI objectives, budgets, and time frames.            "
            center
            mb="80px"
          />

          <div className="-mx-4 flex flex-wrap">
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
          </div>
        </div>

        {/* <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="al7EYfWKuVg"
        onClose={() => setOpen(false)}
      /> */}

        <div className="absolute bottom-0 left-0 right-0 z-[-1]">
          <img src="/images/video/shape.svg" alt="shape" className="w-full" />
        </div>
      </section>
      {/* <section className="py-10 lg:py-20 bg-stone-100 font-poppins dark:bg-gray-950">
        <div className=" py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap ">
            <div className="w-full px-4 mb-10 lg:w-2/5 lg:mb-0 ">
              <div className="lg:max-w-md">
                <div className="px-4 pl-4 mb-6 border-l-4 border-blue-500">
                  <span className="text-sm text-gray-600 uppercase dark:text-gray-400">
                    Who we are?
                  </span>
                  <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                    About Us
                  </h1>
                </div>
                <p className="px-4 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam Lorem ipsum dolor sit amet.
                </p>
                <div className="flex flex-wrap items-center">
                  <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                    <div className="p-6 bg-white dark:bg-gray-900">
                      <span className="text-blue-500 dark:text-blue-400">
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
                      <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">
                        2097
                      </p>
                      <h2 className="text-sm text-gray-700 dark:text-gray-400">
                        Projects and Plans
                      </h2>
                    </div>
                  </div>
                  <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                    <div className="p-6 bg-white dark:bg-gray-900">
                      <span className="text-blue-500 dark:text-blue-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          className="w-10 h-10"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                          <path
                            fill-rule="evenodd"
                            d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                          />
                          <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                        </svg>
                      </span>
                      <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">
                        3,590
                      </p>
                      <h2 className="text-sm text-gray-700 dark:text-gray-400">
                        Helped people
                      </h2>
                    </div>
                  </div>
                  <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                    <div className="p-6 bg-white dark:bg-gray-900">
                      <span className="text-blue-500 dark:text-blue-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          className="w-10 h-10"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                      </span>
                      <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">
                        74
                      </p>
                      <h2 className="text-sm text-gray-700 dark:text-gray-400">
                        Volunteer
                      </h2>
                    </div>
                  </div>
                  <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                    <div className="p-6 bg-white dark:bg-gray-900">
                      <span className="text-blue-500 dark:text-blue-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          className="w-10 h-10"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
                        </svg>
                      </span>
                      <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">
                        100
                      </p>
                      <h2 className="text-sm text-gray-700 dark:text-gray-400">
                        Timing
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 mb-10 lg:w-3/5 lg:mb-0">
              <img
                src="https://i.postimg.cc/9MW8G96J/pexels-the-coach-space-2977565.jpg"
                alt=""
                className="relative z-40 object-cover w-full h-full rounded"
              />
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Video;
