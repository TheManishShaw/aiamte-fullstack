import image1 from "../../public/images/slider/slider.png";
import image2 from "../../public/images/slider/slider-4.png";
import image3 from "../../public/images/slider/slider-2.png";
import image4 from "../../public/images/slider/slider-3.png";

export const images: any = [image1, image2, image3, image4];

const imageByIndex = (index: number): string => images[index % images.length];

export default imageByIndex;
