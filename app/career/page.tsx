import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <section className="nav-padding w-full mb-10">
      <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center">
        <h1 className="sm:heading1 heading2 mb-6 text-center text-white dark:text-white">
          No openings at this time. Please check back later for updates.
        </h1>
      </div>
    </section>
  );
};

export default page;
