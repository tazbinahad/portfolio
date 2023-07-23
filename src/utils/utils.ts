import { Mode } from "@/types/globalType";

export const switchMode = (mode: Mode) => {
  if (mode === "light") {
    document.documentElement.classList.remove("dark-version");
    document.documentElement.classList.add("white-version");
  } else {
    document.documentElement.classList.remove("white-version");
    document.documentElement.classList.add("dark-version");
  }
};
