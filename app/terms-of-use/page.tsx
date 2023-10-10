"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import React from "react";

const listDataName = [
  {
    id: 1,
    name: "1. Acceptance of Terms",
    url: "AcceptanceOfTerms",
  },
  {
    id: 2,
    name: "2. Use License",
    url: "UseLicense",
  },
  {
    id: 3,
    name: "3. Disclaimer",
    url: "Disclaimer",
  },
  {
    id: 4,
    name: "4. Limitations",
    url: "Limitations",
  },

  {
    id: 5,
    name: "5. Accuracy of Materials",
    url: "AccuracyOfMaterials",
  },
  {
    id: 6,
    name: "6. Links",
    url: "Links",
  },
  {
    id: 7,
    name: "7. Modifications",
    url: "Modifications",
  },
  {
    id: 8,
    name: "8. Governing Law",
    url: "GoverningLaw",
  },
];
const page = () => {
  return (
    <>
      <Breadcrumb pageName="Terms of use Page" description="" />
      <section className="overflow-hidden relative top-10 pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-3/12">
              <div className="mb-10 rounded-3xl border-2 bg-secondary border-gray-400 dark:border-gray-700 bg-opacity-5 dark:bg-opacity-90">
                <h3 className="border-b bg-secondary dark:bg-white m-3 mx-5 text-white rounded-3xl border-body-color border-opacity-10 py-4 px-8 text-lg font-semibold  dark:border-white dark:border-opacity-10 dark:text-black">
                  CONTENTS
                </h3>
                <ul className="py-6 px-8">
                  {listDataName.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={`#${item.url}`}
                        className="mb-8 inline-block text-2xl font-medium text-black dark:text-white hover:text-primary"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-9/12  !leading-relaxed text-body-color dark:text-white">
              <div className=" px-6">
                <div className="container mx-auto py-2">
                  <h1 className="text-3xl font-bold mb-4">
                    Terms and Conditions
                  </h1>

                  {/* Section 1: Acceptance of Terms */}
                  <section id="AcceptanceOfTerms" className="mb-8 ">
                    <h2 className="text-2xl font-bold mb-2">
                      1. Acceptance of Terms
                    </h2>
                    <p className="text-xl ">
                      By accessing the website at{" "}
                      <a
                        href="https://www.aimate.in"
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://www.aimate.in
                      </a>
                      , you are agreeing to be bound by these terms of service,
                      all applicable laws, and regulations, and agree that you
                      are responsible for compliance with any applicable local
                      laws. If you do not agree with any of these terms, you are
                      prohibited from using or accessing this site. The
                      materials contained in this website are protected by
                      applicable copyright and trademark law.
                    </p>
                  </section>

                  {/* Section 2: Use License */}
                  <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">2. Use License</h2>
                    <p className="text-xl ">
                      Permission is granted to temporarily download one copy of
                      the materials (information or software) on Aimate's
                      website for personal, non-commercial transitory viewing
                      only. This is the grant of a license, not a transfer of
                      title, and under this license, you may not:
                    </p>
                    <ul className="list-disc pl-6 text-xl">
                      <li>modify or copy the materials;</li>
                      <li>
                        use the materials for any commercial purpose, or for any
                        public display (commercial or non-commercial);
                      </li>
                      <li>
                        attempt to decompile or reverse engineer any software
                        contained on Aimate's website;
                      </li>
                      <li>
                        remove any copyright or other proprietary notations from
                        the materials; or
                      </li>
                      <li>
                        transfer the materials to another person or "mirror" the
                        materials on any other server.
                      </li>
                    </ul>
                  </section>

                  {/* Section 3: Disclaimer */}
                  <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">3. Disclaimer</h2>
                    <p className="text-xl ">
                      The materials on Aimate's website are provided on an
                      'as-is' basis. Aimate makes no warranties, expressed or
                      implied, and hereby disclaims and negates all other
                      warranties, including, without limitation, implied
                      warranties or conditions of merchantability, fitness for a
                      particular purpose, or non-infringement of intellectual
                      property or other violation of rights.
                    </p>
                    <p className="text-xl ">
                      Further, Aimate does not warrant or make any
                      representations concerning the accuracy, likely results,
                      or reliability of the use of the materials on its website
                      or otherwise relating to such materials or on any sites
                      linked to this site.
                    </p>
                  </section>

                  {/* Section 4: Limitations */}
                  <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">4. Limitations</h2>
                    <p className="text-xl ">
                      In no event shall Aimate or its suppliers be liable for
                      any damages (including, without limitation, damages for
                      loss of data or profit, or due to business interruption)
                      arising out of the use or inability to use the materials
                      on Aimate's website, even if Aimate or an authorized
                      representative of Aimate has been notified orally or in
                      writing of the possibility of such damage. Because some
                      jurisdictions do not allow limitations on implied
                      warranties, or limitations of liability for consequential
                      or incidental damages, these limitations may not apply to
                      you.
                    </p>
                  </section>

                  {/* Section 5: Accuracy of Materials */}
                  <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">
                      5. Accuracy of Materials
                    </h2>
                    <p className="text-xl ">
                      The materials appearing on Aimate's website could include
                      technical, typographical, or photographic errors. Aimate
                      does not warrant that any of the materials on its website
                      are accurate, complete, or current. Aimate may make
                      changes to the materials contained on its website at any
                      time without notice. However, Aimate does not make any
                      commitment to update the materials.
                    </p>
                  </section>

                  {/* Section 6: Links */}
                  <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">6. Links</h2>
                    <p className="text-xl ">
                      Aimate has not reviewed all of the sites linked to its
                      website and is not responsible for the contents of any
                      such linked site. The inclusion of any link does not imply
                      endorsement by Aimate of the site. Use of any such linked
                      website is at the user's own risk.
                    </p>
                  </section>

                  {/* Section 7: Modifications */}
                  <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">
                      7. Modifications
                    </h2>
                    <p className="text-xl ">
                      Aimate may revise these terms and conditions for its
                      website at any time without notice. By using this website,
                      you are agreeing to be bound by the then-current version
                      of these terms of service.
                    </p>
                  </section>

                  {/* Section 8: Governing Law */}
                  <section>
                    <h2 className="text-2xl font-bold mb-2">
                      8. Governing Law
                    </h2>
                    <p className="text-xl ">
                      These terms and conditions are governed by and construed
                      in accordance with the laws of India, and you irrevocably
                      submit to the exclusive jurisdiction of the courts in that
                      jurisdiction.
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
