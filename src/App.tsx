import "./App.css";
import Flashcards from "./Flashcards";
import Settings from "./Settings";
import { useSelectedLanguages } from "./useSelectedLanguages";

function App() {
  const { selectedLanguages, setSelectedLanguages } = useSelectedLanguages();

  return (
    <>
      <Settings
        selectedLanguages={selectedLanguages}
        onChange={setSelectedLanguages}
      />
      <Flashcards selectedLanguages={selectedLanguages} />
    </>
  );
}

export default App;
