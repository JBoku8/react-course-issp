import { ExpansesListItem } from './ExpansesListItem';
import { useExpanses } from '../../providers/ExpanseProvider';

export const ExpansesList = () => {
  const data = useExpanses();

  return (
    <ol className="list-group list-group-numbered">
      {data.map((item) => {
        return <ExpansesListItem item={item} key={item.id} />;
      })}
    </ol>
  );
};
