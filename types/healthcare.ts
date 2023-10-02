export type HealthcareData = {
  title: string;
  image: string;
  description: string;
  features: {
    name?: string;
    description: string;
  }[];
  keyFeatures: {
    name: string;
    description: string;
  }[];
};
