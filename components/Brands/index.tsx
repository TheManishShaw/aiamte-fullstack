import { Brand } from "@/types/brand";
import Image from "next/image";
import Link from "next/link";

const brandsData: Brand[] = [
  {
    id: 1,
    name: "GDPR ready",
    href: "#",
    image: "/images/ds-logo1.svg",
  },
  {
    id: 2,
    name: "HIPAA Compliant",
    href: "#",
    image: "/images/ds-logo2.svg",
  },
  // {
  //   id: 3,
  //   name: "Lineicons",
  //   href: "https://lineicons.com",
  //   image: "/images/brands/lineicons.svg",
  // },
  // {
  //   id: 4,
  //   name: "GrayGrids",
  //   href: "https://graygrids.com",
  //   image: "/images/brands/graygrids.svg",
  // },
  // {
  //   id: 5,
  //   name: "TailAdmin",
  //   href: "https://tailadmin.com",
  //   image: "/images/brands/tailadmin.svg",
  // },
];

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp flex flex-wrap items-center max-w-3xl mx-auto justify-center rounded-[26px] bg-dark py-8 px-8 dark:bg-primary dark:bg-opacity-20 "
              data-wow-delay=".1s
              "
            >
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand;

  return (
    <div className="mx-3 flex w-full max-w-[160px] items-center justify-center py-[15px] sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]">
      <Link
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-20 w-full opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={image} alt={name} fill />
      </Link>
    </div>
  );
};
