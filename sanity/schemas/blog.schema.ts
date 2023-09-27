const schema = {
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      require,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      require,
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "views",
      title: "Views",
      type: "number",
      initialValue: 0,
    },
    {
      name: "poster",
      title: "Poster",
      type: "image",
      validation: (Rule: any) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      validation: (Rule: any) => Rule.required(),
      options: {
        list: [
          "Document AI",
          "Computer Vision",
          "Natural Language Processing (NLP)",
          "Data Annotation",
          "Healthcare Ai",
          "Conversational Ai",
          "Text Annotation",
          "Video Annotation",
          "Audio Annotation",
          "Image Annotation",
        ],
      },
    },
    {
      name: "popularTags",
      title: "Popular Tags",
      type: "string",
    },
    {
      name: "author",
      title: "Author",
      type: "string",
      validation: (Rule: any) => Rule.required(),
      initialValue: "Aimate",
      options: {
        list: [
          "Aimate",
          "Manish Shaw",
          "Shraddha Gupta",
          "Deepansh Sahni",
          "User",
        ],
      },
    },
    {
      name: "authorImg",
      title: "Author Img",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};

export default schema;
