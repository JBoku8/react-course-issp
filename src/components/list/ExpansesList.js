import { useContext } from 'react';

import { ExpansesListItem } from './ExpansesListItem';
import { expansesContext } from '../../contexts/expansesContext';

export const ExpansesList = () => {
  const { expansesData: data } = useContext(expansesContext);

  return (
    <ol className="list-group list-group-numbered">
      {data.map((item) => {
        return <ExpansesListItem item={item} key={item.id} />;
      })}
    </ol>
  );
};
