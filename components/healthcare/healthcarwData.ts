import { HealthcareData } from "@/types/healthcare";

export const healthCareServices: HealthcareData[] = [
  {
    title: " Modality MRI",
    image: "/images/services/cloud.png",
    description:
      "This enables extensive utilization of medical image data for more effective diagnosis of disease, prognosis, and treatment. This basically involves making various 4D or 3D information, and this information improves human comprehension by utilizing past knowledge, shape, texture, and information of contour, background information via image sequence, and other types of factors. The most conventional process is used to detect and diagnose abnormal or normal situations through MRIs namr description",
    features: [
      {
        name: "Speech/Audio & text ",
        description:
          "Many high-resolution images that were taken from real patients and examined using advanced methods are part of our datasets.        ",
      },
      {
        name: "SSL certificates.",
        description:
          "Our datasets are intended to aid research and medical professionals in expanding their knowledge",
      },
      {
        name: "Database backups.",
        description:
          "Most importantly, the design of datasets understands different medical conditions including, ",
      },
    ],
    keyFeatures: [
      {
        name: "MRI Brain Lesions",
        description: "Multiple Sclerosis, Brain Tumor , Traumatic injuries.",
      },
      {
        name: "MRI Breast",
        description:
          "Nodules, Cancer, Post Mastectomy, Implants, Healthy controls.",
      },
      {
        name: "MRI Spine",
        description: "Herniated Disc, Traumatic Injury, Healthy Controls.",
      },
      {
        name: "MRI Abdomen w/wo Contrast, MRCPs",
        description:
          "Suspicious Hepatocellular Nodules/Carcinomas, Pancreatic carcinomas, Renal Diseases, Healthy.",
      },
      {
        name: "MRI Prostate",
        description: "Cancer, Healthy Controls",
      },
      {
        name: "MRI Knee",
        description: "ACL/other diseases, Healthy ",
      },
    ],
  },
  {
    title: "Modality CT scan ",
    image: "/images/services/Modality CT scan.jpg",
    description:
      "One of the other conventional diagnosis processes with imaging method and combines with computer X-ray technology to generate inside images of the body. This process comes under the standard computerized image-examining diagnosis. The CT-scan image undergoes a complex process that includes improvement of the image, acquisition, extraction of key features, and the interpretation of the outcome.",
    features: [
      {
        description:
          "Our datasets contain numerous high-quality images that were processed using real information from patients",
      },
      {
        description:
          "The goal of such datasets is to advance the knowledge of researchers and medical professionals",
      },
      {
        description:
          "Most importantly, the design of datasets understands different medical conditions including ",
      },
    ],
    keyFeatures: [
      {
        name: "CT Brain",
        description:
          ": Intracranial Haemorrhage, Subdural Hematomas (Acute/Chronic), Epidural Hematomas, Healthy Controls",
      },
      {
        name: "CT Thorax",
        description:
          " Pulmonary nodules, Carcinomas, Other diseases, Healthy Controls.",
      },
      {
        name: "CT Abdomen w/wo contrast",
        description:
          " Acute cholecystitis, Alcoholic liver disease, Cholelithiasis, Pancreatic pseudocyst, Pancreatitis",
      },
      {
        name: "CT Pelvis",
        description: " Fractured, Healthy Controls",
      },
      {
        name: "CT Joints",
        description: "Fractured, Healthy, Shoulder, Elbows, Hip, Knee",
      },

      {
        name: "  CT Spine",
        description: "CT long bones ",
      },
    ],
  },
  {
    title: "Modality X-rays",
    image: "/images/services/Modality-X-rays.jpg",
    description:
      "X-ray testing is performed for checking the component's integrity and structure within it. For medical purposes and to identify unusual conditions within an individual's body, images from X-rays of an object being tested can be produced at various positions and energies.Fineax introduces you to high-quality X-ray image datasets which are important for medical diagnosis and research. ",
    features: [
      {
        description:
          "Our datasets are designed to enhance effective insights within researchers and medical professionals",
      },
      {
        description:
          "With our organization, you can easily access accurate and reliable medical information to increase your research as well as develop patients' results",
      },
      {
        description:
          "This data involves understanding various injuries, fractures and deformities with AP/PA views including",
      },
    ],
    keyFeatures: [
      {
        name: "Skull",
        description: "",
      },
      {
        name: "Ribs",
        description: "",
      },
      {
        name: "Shoulder",
        description: "",
      },
      {
        name: "Joints",
        description: "",
      },
      {
        name: "Upper extremities",
        description: "",
      },

      {
        name: "Lower extremities",
        description: " ",
      },
    ],
  },
];

export const HealthcareSectionData = [
  {
    id: 1,
    title: "Audio/Speech Processing",
    description:
      "Our audio and speech processing services harness the power of advanced algorithms and machine learning to analyze and enhance audio data for various applications. We specialize in extracting valuable insights from audio recordings, improving quality, and enabling seamless integration into AI-driven solutions.",
    image: "/images/services/cloud.png",
    ServicesOffered: [
      {
        id: 1,
        title: "Speech Recognition",
        description:
          "Accurately transcribe spoken words into text, enabling automated voice assistants, transcription services, and voice-controlled applications.",
      },
      {
        id: 2,
        title: "Emotion Analysis",
        description:
          "Detect emotions expressed in audio, useful for sentiment analysis, customer feedback analysis, and virtual assistants with emotional intelligence.",
      },
      {
        id: 3,
        title: "Speaker Identification",
        description:
          "Distinguish between different speakers in audio recordings, valuable for security applications, customer service, and content indexing.",
      },
    ],
    AdvancedFeatures: [
      {
        id: 1,
        title: "Customization",
        description:
          "Tailored solutions to meet your specific audio processing needs, whether it's multiple languages, dialects, or industry-specific jargon.",
      },
      {
        id: 2,
        title: "Noise Reduction",
        description:
          "Enhance audio quality by removing background noise, ensuring clarity in recordings for analysis or customer engagement.",
      },
      {
        id: 3,
        title: "Multilingual Support",
        description:
          "Support for a wide range of languages and accents, making our services inclusive and adaptable to global markets.",
      },
    ],
  },
];
