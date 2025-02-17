import type { ILanguageItem } from "~/types";

interface IPage {
  name: ILanguageItem;
  url: string;
}

const pages: IPage[] = [
  {
    name: {
      es: "Principal",
      en: "Home",
    },
    url: "/",
  },
  {
    name: {
      es: "Servicios",
      en: "Services",
    },
    url: "/services",
  },
  {
    name: {
      es: "Proyectos",
      en: "Projects",
    },
    url: "/projects",
  },
];
export const usePage = () => {
  return {
    pages,
  };
};
