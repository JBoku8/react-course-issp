import { useContext } from 'react';
import { expansesContext } from '../../contexts/expansesContext';

import { SORT_TYPE } from '../../utils';

export function ExpansesFilter() {
  const { onSortHandler } = useContext(expansesContext);

  return (
    <div className="col-8 mx-auto mb-2">
      <div className="btn-group">
        <button
          className="btn btn-outline-primary"
          onClick={onSortHandler.bind(null, SORT_TYPE.ASC)}>
          დალაგება ზრდადობით
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={onSortHandler.bind(null, SORT_TYPE.DESC)}>
          დალაგება კლებადობით
        </button>
      </div>
    </div>
  );
}
