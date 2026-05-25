import React, { useState } from "react";
import "./Settings.css";

type Props = {
  selectedLanguages: string[];
  onChange: (langs: string[]) => void;
};

const languages = [
  {
    code: "english",
    img: "gb.svg",
  },
  {
    code: "malay",
    img: "my.svg",
  },
  {
    code: "tamil",
    img: "in.svg",
  },
  {
    code: "chinese",
    img: "cn.svg",
  },
];

export default function Settings({ selectedLanguages, onChange }: Props) {
  const [showSettings, setShowSettings] = useState(false);
  const toggle = (lang: string) => {
    const has = selectedLanguages.includes(lang);
    const next = has
      ? selectedLanguages.filter((l) => l !== lang)
      : [...selectedLanguages, lang];
    if (next.length === 0) {
      alert("At least one language must be selected");
      // prevent unselecting all languages
      return;
    }
    onChange(next);
    try {
      localStorage.setItem("selectedLanguages", JSON.stringify(next));
    } catch (e) {
      // ignore
    }
  };

  const renderSelectedLanguages = () => {
    const flags = selectedLanguages
      .map((code) => {
        const lang = languages.find((l) => l.code === code);
        return lang ? (
          <img
            key={code}
            src={`${import.meta.env.BASE_URL}${lang.img}`}
            alt={code}
            className="settings-flag-selected"
          />
        ) : null;
      })
      .filter(Boolean);
    return <div className="settings-flag-selected-container">{flags}</div>;
  };

  return (
    <div>
      <header className="settings-header">
        <button
          className={`settings-button ${showSettings ? "open" : ""}`}
          onClick={() => setShowSettings((s) => !s)}
          aria-expanded={showSettings}
          aria-controls="settings-panel"
        >
          <span>{showSettings ? "Close" : renderSelectedLanguages()}</span>
        </button>
      </header>

      {showSettings && (
        <div
          id="settings-panel"
          className="settings-panel"
          role="dialog"
          aria-modal="true"
        >
          <h3 className="settings-title">Display languages</h3>
          <div className="settings-list">
            {languages.map((lang) => (
              <label key={lang.code}>
                <input
                  className="settings-checkbox"
                  type="checkbox"
                  checked={selectedLanguages.includes(lang.code)}
                  onChange={() => toggle(lang.code)}
                />
                <div className="settings-lang">
                  <img
                    src={`${import.meta.env.BASE_URL}${lang.img}`}
                    alt={lang.code}
                    className="settings-flag"
                  />
                  {lang.code.charAt(0).toUpperCase() + lang.code.slice(1)}
                </div>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
