type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Blog = {
  id: string;
  _id: string;
  title: string;
  category: string;
  paragraph: string;
  image: string;
  author: Author;
  // tags: string[];
  publishDate: string;
  description: string;
  downloadLink: string;
  downloadNumber: string;
};
