// ./schemas/person.js

const schema = {
  name: "contact",
  title: "Contact",
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
    {
      name: "message",
      title: "Message",
      type: "string",
    },
  ],
};

export default schema;
