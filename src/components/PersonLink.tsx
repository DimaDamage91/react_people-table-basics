import { Link } from 'react-router-dom';
import { Person } from '../types/Person';
import { FC } from 'react';

interface Props {
  person: Person | null;
}


export const PersonLink: FC<Props> = ({ person }) => {
  if (!person) {
    return <>-</>
  }

  return (
    <Link to={`/peopele/${person.slug}`}>{person.name}</Link>
  );
};
