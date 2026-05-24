export const Flashcard = ({
  word,
  romanizedWord,
  image,
}: {
  word: string;
  romanizedWord: string;
  image: string;
}) => {
  return (
    <div>
      <div style={{ height: 500, width: "100%" }}>
        <img
          src={`https://waynewee.com/${image}.png`}
          alt={word}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>
      <h2 style={{ textAlign: "center" }}>{romanizedWord}</h2>
      <h2 style={{ textAlign: "center" }}>{word}</h2>
    </div>
  );
};

export default Flashcard;
