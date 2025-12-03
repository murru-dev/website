// const language = ref<string>(localStorage.getItem("lang") || "es");
const language = ref<string>("es");

export const useLanguage = () => {
  const toggleLanguage = () =>
    (language.value = language.value === "es" ? "en" : "es");

  return {
    language,
    toggleLanguage,
  };
};
