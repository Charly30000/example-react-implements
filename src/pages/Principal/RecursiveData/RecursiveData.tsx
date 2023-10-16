import { Card } from "../../../components/Card";
import { Character } from "../../../services/interfaces/people.interface";
import "./recursiveData.css";

interface Props {
  charactersInfo: Character[];
}

export const RecursiveData = (props: Props) => {
  return (
    <div className="container">
      {props.charactersInfo.map((character, idx) => (
        <Card
          key={idx + character.name}
          name={character.name}
          height={character.height}
          url={character.url}
          gender={character.gender}
        />
      ))}
    </div>
  );
};
