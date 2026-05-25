import type { Data } from "./data";
import { imageBaseUrl } from "./config";
import "./Flashcard.css";

export const Flashcard = ({
  englishWord,
  tamilRomanization,
  tamilWord,
  malayWord,
  chineseWord,
  chinesePinyin,
  imageKey,
  selectedLanguages,
}: Data & {
  selectedLanguages?: string[];
}) => {
  return (
    <div className="flashcard">
      <div id="image-container" style={{ height: "40vh", width: "100%" }}>
        <img
          src={`${imageBaseUrl}/${imageKey}.png`}
          alt={englishWord}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>
      {selectedLanguages && selectedLanguages.length > 0 && (
        <div className="words">
          {selectedLanguages?.includes("english") && (
            <div className="row">
              <img className="icon" src={`${import.meta.env.BASE_URL}gb.svg`} />
              <div className="word english">{englishWord}</div>
            </div>
          )}

          {selectedLanguages?.includes("malay") && (
            <div className="row">
              <img className="icon" src={`${import.meta.env.BASE_URL}my.svg`} />
              <div className="word malay">{malayWord}</div>
            </div>
          )}

          {selectedLanguages?.includes("tamil") && (
            <div className="row">
              <img className="icon" src={`${import.meta.env.BASE_URL}in.svg`} />
              <div>
                <div className="word tamil">{tamilWord}</div>
                <div className="romanization">{tamilRomanization}</div>
              </div>
            </div>
          )}

          {selectedLanguages?.includes("chinese") && (
            <div className="row">
              <img className="icon" src={`${import.meta.env.BASE_URL}cn.svg`} />
              <div>
                <div className="word chinese">{chineseWord}</div>
                <div className="pinyin">{chinesePinyin}</div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
