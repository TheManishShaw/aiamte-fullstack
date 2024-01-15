import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features";

const DocAi = () => {
  return (
    <>
      <Breadcrumb
        pageName="Document AI"
        description="Document AI, also known as Document Automation, is a technology that automates the processing and analysis of documents. Aimate offers various types of Document AI services to meet your needs."
      />
      <section className="container mx-auto text-base font-medium leading-relaxed text-body-color mt-8 p-8 bg-transparent  rounded-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Recognition */}
          <div className="flex items-center">
            <img
              src="/images/services/OCR.png"
              alt="Image Recognition"
              className="max-w-full rounded-lg shadow-md"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 heading2">
              Optical Character Recognition (OCR)
            </h3>
            <p className="text-xl">
              Assigns predefined labels or categories to images, making it
              possible for machines to recognize and classify objects or scenes.
            </p>
            <h4 className="text-xl font-semibold mt-4">Features:</h4>
            <ul className="list-disc pl-8">
              <li>
                OCR extracts text from images or scanned documents, making
                printed or handwritten text accessible for digital processing.
              </li>
            </ul>
            <h4 className="text-xl font-semibold mt-4">Application:</h4>
            <ul className="list-disc pl-8">
              <li>
                OCR extracts text from images or scanned documents, making
                printed or handwritten text accessible for digital processing.
              </li>
            </ul>
          </div>

          {/* Natural Language Processing */}
          <div>
            <h3 className="text-2xl heading2 font-semibold mb-2">
              Named Entity Recognition (NER):
            </h3>
            <p className="text-xl">
              NER is a natural language processing feature that identifies and
              classifies named entities within text. These entities can include
              names of people, organizations, locations, dates, and more.
            </p>
            <h4 className="text-xl font-semibold mt-4">Features:</h4>
            <ul className="list-disc pl-8">
              <li>Information Extraction</li>
              <li>Document Summarization</li>
              <li>Data Standardization</li>
              <li>Finance and Investment Analysis</li>
            </ul>
          </div>
          <div className="flex items-center">
            <img
              src="/images/services/NER.png"
              alt="Natural Language Processing"
              className="max-w-full rounded-lg shadow-md"
            />
          </div>

          {/* Data Extraction */}
          <div className="flex items-center">
            <img
              src="/images/services/KPE.png"
              alt="Data Extraction"
              className="max-w-full rounded-lg shadow-md"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2 heading2">
              Key phrase Extraction, (KPE)
            </h3>
            <p className="text-xl">
              KPE is the process of automatically extracting keywords or key
              phrases—the most significant and pertinent terms that encapsulate
              the core of the text—from a given text.
            </p>
            <h4 className="text-xl font-semibold mt-4">Features:</h4>
            <ul className="list-disc pl-8">
              <li>SEO and Content Optimization</li>
              <li>Topic Modeling</li>
              <li>Text Mining and Analysis</li>
              <li>Automated Tagging</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl heading2 font-semibold mb-2">
              Applications of Text Classification in Document AI:
            </h3>
            <p className="text-xl">
              Classification of Text in a Document Using AI, models are trained
              to classify text material into pre-established groups. It predicts
              the category of new documents by analyzing characteristics in
              labeled training data through machine learning. This automation
              improves efficiency when handling different types of written data
              by streamlining the organizing, sorting, and retrieval of
              documents.
            </p>
            <h4 className="text-xl font-semibold mt-4">Features:</h4>
            <ul className="list-disc pl-8">
              <li>Sentiment Analysis</li>
              <li>Security Threat Detection</li>
              <li>Language Identification</li>
            </ul>
          </div>
          <div className="flex items-center">
            <img
              src="/images/services/Text.png"
              alt="Natural Language Processing"
              className="max-w-full rounded-lg shadow-md"
            />
          </div>

          {/* Add more Document AI types here */}
        </div>
      </section>
      <Features />
    </>
  );
};

export default DocAi;
