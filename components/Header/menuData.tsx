import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Services",
    newTab: false,

    submenu: [
      {
        id: 41,
        title: "Document AI",
        path: "/service/document-ai",
        newTab: false,
      },
      {
        id: 42,
        title: "Computer Vision",
        path: "/service/computer-vision",
        newTab: false,
      },
      {
        id: 43,
        title: "Conversational AI",
        path: "/service/speech-audio",
        newTab: false,
      },
      {
        id: 44,
        title: "Healthcare AI",
        path: "/service/health-care",
        newTab: false,
      },
      {
        id: 45,
        title: "Annotation & Labeling",
        path: "/service/data-annotation",
        newTab: false,
      },
    ],
  },

  {
    id: 3,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 4,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
