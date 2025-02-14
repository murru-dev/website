interface ILanguageItem {
  es: string;
  en: string;
}

interface ISocialAccount {
  name?: string;
  icon: string;
  colorClasses?: string[];
  url: string;
}

interface ITestimony {
  project: string;
  name: string;
  company: string;
  position: string;
  avatar: string;
  text: string;
  date: string;
}

interface IClient {
  name: string;
  company: string;
  position: string;
  avatar: string;
}

interface IProjectItem {
  bg: string;
  name: string;
  client: string;
  description: string;
  tags: string[];
}
