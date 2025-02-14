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
      es: "Sobre Mí",
      en: "About",
    },
    url: "/about",
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
      es: "Proyectos & Tutoriales",
      en: "Projects & Tutorials",
    },
    url: "/projects-and-tutorials",
  },
];
export const usePage = () => {
  return {
    pages,
  };
};
