import { Gender } from '../services/interfaces/people.interface';
import './card.css';

interface Props {
  name: string;
  height: string;
  url: string;
  gender: Gender;
}

export const Card = (props: Props) => {
  
  const tipoDeAltura = () => {
    if (parseInt(props.height) > 170) {
      return props.gender === Gender.Female ? 'alta' : 'alto';
    } else {
      return props.gender === Gender.Female ? 'baja' : 'bajo';
    }
  }

  return (
    <div className="card">
      <h2>Me llamo: { props.name }</h2>
      <p>Mido: <b>{props.height} cm</b>, por lo que soy <i>{tipoDeAltura()}</i></p>
      <a href={props.url}>Y puedes descubrir más sobre mi aqui</a>
  </div>
  )
}