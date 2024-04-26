import es from "./es.json";
import en from "./en.json";
import pt from "./pt-br.json";

export function getI18N(lang: string = "es") {
  if (lang === "en") return { ...en };
  if (lang === "pt-br") return { ...pt };
  return { ...es };
}
