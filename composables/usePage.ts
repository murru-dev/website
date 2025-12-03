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
];
export const usePage = () => {
  return {
    pages,
  };
};
