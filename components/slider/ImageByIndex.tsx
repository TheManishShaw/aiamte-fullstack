import image1 from "../../../public/video/audio-annotaion.png";
import image2 from "../../../public/video/conversational.jpg";
import image3 from "../../../public/video/ComputerVision.jpg";
import image4 from "../../../public/video/conversational.jpg";

export const images = [image1, image2, image3, image4];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
