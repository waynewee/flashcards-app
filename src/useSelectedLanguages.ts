import { useEffect, useState } from "react";

export const useSelectedLanguages = () => {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem("selectedLanguages");
    if (raw) {
      try {
        setSelectedLanguages(JSON.parse(raw));
      } catch (e) {
        setSelectedLanguages(["english", "malay", "tamil", "chinese"]);
      }
    } else {
      setSelectedLanguages(["english", "malay", "tamil", "chinese"]);
    }
  }, []);

  useEffect(() => {
    if (selectedLanguages && selectedLanguages.length > 0) {
      localStorage.setItem(
        "selectedLanguages",
        JSON.stringify(selectedLanguages),
      );
    }
  }, [selectedLanguages]);

  return { selectedLanguages, setSelectedLanguages };
};
