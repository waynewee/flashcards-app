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
}: Data) => {
  return (
    <div className="flashcard">
      <div id="image-container" style={{ height: 500, width: "100%" }}>
        <img
          src={`${imageBaseUrl}/${imageKey}.png`}
          alt={englishWord}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>
      <div className="words">
        <div className="row">
          <img className="icon" src={"/gb.svg"} />
          <div className="word english">{englishWord}</div>
        </div>

        <div className="row">
          <img className="icon" src={"/my.svg"} />
          <div className="word malay">{malayWord}</div>
        </div>

        <div className="row">
          <img className="icon" src={"/in.svg"} />
          <div>
            <div className="word tamil">{tamilWord}</div>
            <div className="romanization">{tamilRomanization}</div>
          </div>
        </div>

        <div className="row">
          <img className="icon" src={"/cn.svg"} />
          <div>
            <div className="word chinese">{chineseWord}</div>
            <div className="pinyin">{chinesePinyin}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
