// ./schemas/person.js

const schema = {
  name: "team",
  title: "Team",
  type: "document",
  fields: [
    {
      name: "fullName",
      title: "Full name",
      type: "string",
    },
    {
      name: "userImage",
      title: "User Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "designation",
      title: "Designation",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "message",
      title: "Message",
      type: "string",
    },
    {
      title: "Instagram Link",
      name: "instagramLink",
      description: `Can be a path starting with a 'https://www.instagram.com/username/'`,
      type: "url",
    },
    {
      title: "Linkedin Link",
      name: "linkedinLink",
      description: `Can be a path starting with a 'https://www.linkedin.com/in/username/'`,
      type: "url",
    },
    {
      title: "Twitter Link",
      name: "TwitterLink",
      description: `Can be a path starting with a 'https://twitter.com/username/'`,
      type: "url",
    },
  ],
};

export default schema;
