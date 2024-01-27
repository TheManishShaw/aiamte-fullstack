import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features";
import Image from "next/image";

const dataList = [
  {
    id: 1,
    title: "Object Detection",
    description:
      " Identifies and locates objects within an image or video stream, often used in applications like surveillance, autonomous vehicles, and image tagging.",
    image: "/images/services/computer_vision/Object_Ditection.jpg",
    feature: [
      {
        text: "Object detection enables computers to identify and locate multiple objects within an image or video frame",
      },
    ],
    application:
      "Autonomous vehicles, surveillance systems, and retail inventory management",
  },
  {
    id: 2,
    title: "Image Classification",
    description:
      " Assigns predefined labels or categories to images, making it possible for machines to recognize and classify objects or scenes.",
    image: "/images/services/computer_vision/Image_Clasification.webp",
    feature: [
      {
        text: "This type of computer vision AI categorizes images into predefined classes or labels, allowing machines to recognize and classify objects.",
      },
    ],
    application:
      "Image search engines, medical image analysis, and content moderation in social media.",
  },
  {
    id: 3,
    title: "Facial Recognition",
    description:
      " Recognizes and verifies individuals by analyzing unique facial features, commonly used in security systems and biometric authentication.",
    image: "/images/services/computer_vision/Facial_Recogination.png",
    feature: [
      {
        text: "Facial recognition identifies and verifies individuals by analyzing unique facial features, such as the arrangement of eyes, nose, and mouth.",
      },
    ],
    application:
      "Security access control, unlocking smartphones, and tracking attendance.",
  },

  {
    id: 4,
    title: "Gesture Recognition",
    description:
      " Assigns predefined labels or categories to images, making it possible for machines to recognize and classify objects or scenes.",
    image: "/images/services/computer_vision/Gesture_recogination.png",
    feature: [
      {
        text: "Gesture recognition interprets hand movements or body gestures, allowing human-computer interaction through gestures.",
      },
    ],
    application:
      "Virtual reality (VR) and augmented reality (AR) interfaces, gaming, and sign language interpretation.",
  },
  {
    id: 5,
    title: "Scene Understanding",
    description:
      " Assigns predefined labels or categories to images, making it possible for machines to recognize and classify objects or scenes.",
    image: "/images/services/computer_vision/Scene_understanding.jpg",
    feature: [
      {
        text: "Scene understanding goes beyond object detection to comprehend the context and relationships between objects within a scene.",
      },
    ],
    application:
      "Robotics navigation, autonomous drones, and augmented reality gaming.",
  },
  {
    id: 6,
    title: "Anomaly Detection",
    description:
      " Assigns predefined labels or categories to images, making it possible for machines to recognize and classify objects or scenes.",
    image: "/images/services/computer_vision/Anomly_Detection.png",
    feature: [
      {
        text: " Anomaly detection identifies rare or unexpected patterns or events within a dataset, which can be crucial for fraud detection or quality control.",
      },
    ],
    application:
      " Intrusion detection in cybersecurity, manufacturing quality control, and predictive maintenance.",
  },
  {
    id: 7,
    title: " Emotion Recognition",
    description:
      " Assigns predefined labels or categories to images, making it possible for machines to recognize and classify objects or scenes.",
    image: "/images/services/computer_vision/Emotion_Recogination.jpg",
    feature: [
      {
        text: "Emotion recognition assesses the emotional state of individuals by analyzing facial expressions, voice, or physiological signals.",
      },
    ],
    application:
      "Mental health monitoring, customer sentiment analysis, and human-computer emotional interaction.",
  },
  {
    id: 8,
    title: "Video Analysis",
    description:
      " Assigns predefined labels or categories to images, making it possible for machines to recognize and classify objects or scenes.",
    image: "/images/services/computer_vision/Video_Analysis.jpg",
    feature: [
      {
        text: "Video analysis involves the continuous processing of video streams, allowing for real-time monitoring and decision-making.",
      },
    ],
    application:
      "Traffic management, video surveillance, and sports analytics.",
  },
];

const ComputerVision = () => {
  return (
    <>
      <Breadcrumb
        pageName="Computer Vision"
        description="Computer Vision AI is continuously advancing, thanks to machine learning techniques, deep neural networks, and access to large datasets."
      />

      <section className="container mx-auto text-base font-medium leading-relaxed text-body-color  p-8 bg-transparent  rounded-lg">
        <div className="mx-auto m-12 flex max-w-[75rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-4xl text-black dark:text-white">
            Unlocking the Power of Visual Data
          </h2>

          <p className="max-w-[100%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Computer Vision, a subfield of artificial intelligence (AI), is
            revolutionizing industries and everyday life by enabling machines to
            interpret and understand visual information, just like humans do.
            This technology empowers computers to analyze, process, and make
            decisions based on images or video streams. Computer Vision AI
            encompasses a wide range of applications and is continually
            evolving. Let's explore different types of computer vision AI and
            their key features
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {dataList.map((data) =>
            data.id % 2 !== 0 ? (
              <>
                <div className="flex items-center">
                  <img
                    src={data.image}
                    alt={data.title}
                    className="max-w-full rounded-lg shadow-md"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 heading2">
                    {data.title}
                  </h3>
                  <p className="text-xl">{data.description}</p>
                  {data.feature &&
                    data.feature.map((item) => (
                      <>
                        <h4 className="text-xl font-semibold mt-4">
                          Features:
                        </h4>
                        <ul className="list-disc text-lg pl-8">
                          <li> {item.text}</li>
                        </ul>
                      </>
                    ))}

                  {data.application &&
                    data.feature.map((item) => (
                      <>
                        <h4 className="text-xl font-semibold mt-4">
                          Application:
                        </h4>
                        <ul className="list-disc text-lg pl-8">
                          <li> {item.text}</li>
                        </ul>
                      </>
                    ))}
                </div>
              </>
            ) : (
              <>
                <div>
                  <h3 className="text-2xl heading2 font-semibold mb-2">
                    {data.title}
                  </h3>
                  <p className="text-xl">{data.description}</p>

                  {data.feature &&
                    data.feature.map((item) => (
                      <>
                        <h4 className="text-xl font-semibold mt-4">
                          Features:
                        </h4>
                        <ul className="list-disc text-lg pl-8">
                          <li> {item.text}</li>
                        </ul>
                      </>
                    ))}

                  {data.application &&
                    data.feature.map((item) => (
                      <>
                        <h4 className="text-xl font-semibold mt-4">
                          Application:
                        </h4>
                        <ul className="list-disc text-lg pl-8">
                          <li> {item.text}</li>
                        </ul>
                      </>
                    ))}
                </div>
                <div className="flex items-center">
                  <img
                    src={data.image}
                    alt={data.title}
                    className="max-w-full rounded-lg shadow-md"
                  />
                </div>
              </>
            )
          )}
        </div>
      </section>
      <Features />
    </>
  );
};

export default ComputerVision;
