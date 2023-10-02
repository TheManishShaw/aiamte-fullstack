import Breadcrumb from "@/components/Common/Breadcrumb";

const DataAnnotation = () => {
  return (
    <>
      <Breadcrumb
        pageName="Data Annotation"
        description="Data annotation is the process of labeling data to train machine
        learning models. Aimate offers various types of data annotation
        services to meet your needs."
      />
      <section className="container mx-auto mt-8 p-8 bg-transparent text-base font-medium leading-relaxed text-body-color shadow-lg rounded-lg">
        {/* <h2 className="text-3xl font-semibold heading2 mb-4">
          Data Annotation Services
        </h2>
        <p className=" mb-6">
          Data annotation is the process of labeling data to train machine
          learning models. Aimate offers various types of data annotation
          services to meet your needs.
        </p> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex items-center">
            <img
              src="/images/services/Data-Annotation2.jpeg"
              alt="Image Annotation"
              className="max-w-full rounded-lg shadow-md"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2 heading2">
              Image Annotation
            </h3>
            <p className="text-base font-medium leading-relaxed text-body-color">
              Image annotation involves labeling objects or regions in images to
              create training data for computer vision models. It includes
              bounding box annotation, polygon annotation, keypoint annotation,
              and more.
            </p>
            <h4 className="text-xl font-semibold mt-4">Features:</h4>
            <ul className="list-disc text-body-color  pl-8">
              <li>Accurate object labeling</li>
              <li>Diverse annotation formats</li>
              <li>Data augmentation services</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2 heading2">
              Text Annotation
            </h3>
            <p className="">
              Text annotation includes tasks like text classification, named
              entity recognition, sentiment analysis, and more. It's used to
              train natural language processing (NLP) models.
            </p>
            <h4 className="text-xl font-semibold mt-4">Features:</h4>
            <ul className="list-disc  pl-8">
              <li>Customizable annotation guidelines</li>
              <li>Multilingual text annotation</li>
              <li>Named entity recognition labeling</li>
            </ul>
          </div>
          <div className="flex items-center">
            <img
              src="/images/services/text-annotation.png"
              alt="Text Annotation"
              className="max-w-full rounded-lg shadow-md"
            />
          </div>

          <div className="flex items-center">
            <img
              src="/images/services/video-annotation.gif"
              alt="Video Annotation"
              className="max-w-full rounded-lg shadow-md"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2 heading2">
              Video Annotation
            </h3>
            <p className="">
              Video annotation involves labeling objects or actions in video
              frames. It's essential for training machine learning models for
              video analysis, object tracking, and surveillance.
            </p>
            <h4 className="text-xl font-semibold mt-4">Features:</h4>
            <ul className="list-disc  pl-8">
              <li>Frame-by-frame annotation</li>
              <li>Activity recognition labeling</li>
              <li>Temporal annotation for video analysis</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2 heading2">
              Audio Annotation
            </h3>
            <p className="">
              Audio annotation includes tasks like speech recognition, speaker
              identification, and audio sentiment analysis. It's crucial for
              building audio-based AI applications.
            </p>
            <h4 className="text-xl font-semibold mt-4">Features:</h4>
            <ul className="list-disc  pl-8">
              <li>Speaker diarization</li>
              <li>Transcription and annotation</li>
              <li>Emotion analysis labeling</li>
            </ul>
          </div>
          <div className="flex items-center">
            <img
              src="/images/services/audio-annotaion.png"
              alt="Audio Annotation"
              className="max-w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default DataAnnotation;
