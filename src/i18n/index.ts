import es from "./es.json";
import en from "./en.json";
import pt from "./pt-br.json";

export function getI18N(lang: string = "es") {
  if (lang === "en") return { ...en };
  if (lang === "pt-br") return { ...pt };
  return { ...es };
}

export function getLangInURL(url: URL) {
  const lang = url.pathname.split("/")[1];
  if (lang === "") return "es";
  if (lang === "en") return "en";
  if (lang === "pt-br") return "pt-br";
  return undefined;
}
