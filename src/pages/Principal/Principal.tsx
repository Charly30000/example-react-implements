import { useState, useEffect } from "react";
import { getAllPeople } from "../../services/people";
import { Gender, People } from "../../services/interfaces/people.interface";
import { RecursiveData } from "./RecursiveData/RecursiveData";

const initialState: People = {
  count: 0,
  next: "",
  previous: null,
  results: [
    {
      name: "",
      height: "0",
      mass: "0",
      hair_color: "",
      skin_color: "",
      eye_color: "",
      birth_year: "",
      gender: Gender.NA,
      homeworld: "",
      films: [],
      species: [],
      vehicles: [],
      starships: [],
      created: "",
      edited: "",
      url: "",
    },
  ],
};

export const Principal = () => {
  const [people, setPeople] = useState(initialState as People);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      const data: People = await getAllPeople();
      setPeople(data);
      setLoading(false);
    };
    init();
  }, []);

  const loadingDataComponent = () => {
    return <div>Cargando datos...</div>;
  };

  return (
    <div>
      {loading ? (
        loadingDataComponent()
      ) : (
        <RecursiveData charactersInfo={people.results} />
      )}
    </div>
  );
};
