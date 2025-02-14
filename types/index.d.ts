import type { Models } from "node-appwrite";

export interface ILanguageItem {
  en: string;
  es: string;
}

export interface ISocialAccount {
  name?: string;
  icon: string;
  colorClasses?: string[];
  url: string;
}

export interface IClientDocument extends Models.Document {
  name: string;
  company: string;
  position: string;
  avatar: string;
}

export interface ITestimonyDocument extends Models.Document {
  client_id: string;
  comment: string;
}

export interface IClientTestimony {
  name: string;
  company: string;
  position: ILanguageItem;
  avatar: string;
  testimony: ILanguageItem;
  date: string;
}

export interface IProjectItem {
  bg: string;
  name: string;
  client: string;
  description: string;
  tags: string[];
}
