import { pinyin } from "pinyin";
import imageData from "../image-data.json";
export const data: Data[] = imageData.map((d) => ({
  ...d,
  chinesePinyin: pinyin(d.chineseWord).flat().join(" "),
}));

export type Data = {
  imageKey: string;
  englishWord: string;
  tamilWord: string;
  tamilRomanization: string;
  malayWord: string;
  chineseWord: string;
  chinesePinyin: string;
};
