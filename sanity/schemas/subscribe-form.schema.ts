// ./schemas/person.js

const schema = {
  name: "subscribeForm",
  title: "Subscribe Form",
  type: "document",
  fields: [
    {
      name: "fullName",
      title: "Full name",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
  ],
};

export default schema;
