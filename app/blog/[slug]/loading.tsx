import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding flex gap-8 w-full">
        <div className=" w-2/3">
          <Skeleton className="w-full h-[250px] rounded-lg bg-slate-400" />
          <section className="mt-6 flex w-full flex-col sm:mt-10">
            <Skeleton className="w-full h-20  bg-slate-400 mb-10" />
            <Skeleton className=" h-6 w-full  bg-slate-400 mb-10" />
            <Skeleton className=" h-32 w-full  bg-slate-400 mb-10" />
            <Skeleton className=" h-8 w-full  bg-slate-400 mb-10" />
            <Skeleton className=" h-64 w-full  bg-slate-400 mb-10" />
            <Skeleton className=" h-20 w-full  bg-slate-400 mb-10" />
            <Skeleton className=" h-10 w-full  bg-slate-400 mb-10" />
            <Skeleton className=" h-12 w-full bg-slate-400 mb-10" />
          </section>
        </div>
        <div className="w-1/3">
          <Skeleton className="w-full h-[150px] rounded-lg mb-10 bg-slate-400" />
          <Skeleton className="w-full h-[400px] rounded-lg mb-10 bg-slate-400" />
          <Skeleton className="w-full h-[400px] rounded-lg mb-10 bg-slate-400" />
          <Skeleton className="w-full h-[200px] rounded-lg mb-10 bg-slate-400" />
          <Skeleton className="w-full h-[600px] rounded-lg mb-10 bg-slate-400" />
        </div>
      </section>
    </main>
  );
};

export default loading;
