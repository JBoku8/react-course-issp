import { useState } from 'react';

import { ExpansesList } from '../../components/list';
import ExpansesForm from '../../components/forms/expanses-form';

import { expansesList } from '../../data';

function Expanses(props) {
  const [expansesData, setExpansesData] = useState(expansesList);

  const onExpanseSubmit = (data) => {
    /**
     * * newObject !== oldObject
     */
    setExpansesData([...expansesData, data]);
  };

  const onSortHandler = (sortBy) => {
    let sorted = [...expansesData];
    if (sortBy === 'ASC') {
      sorted = sorted.sort((a, b) => a.amount - b.amount);
    } else if (sortBy === 'DESC') {
      sorted = sorted.sort((a, b) => b.amount - a.amount);
    }

    setExpansesData(sorted);
  };

  return (
    <div className="expanses container">
      <div className="row mt-5">
        <h2 className="col-4 mx-auto text-muted text-center">ჩემი ხარჯები</h2>
        <hr />
      </div>
      <div className="row mt-3">
        <div className="col-6 mx-auto">
          <ExpansesForm onSubmit={onExpanseSubmit} />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-8 mx-auto mb-2">
          <div className="btn-group">
            <button
              className="btn btn-outline-primary"
              onClick={onSortHandler.bind(null, 'ASC')}>
              დალაგება ზრდადობით
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={onSortHandler.bind(null, 'DESC')}>
              დალაგება კლებადობით
            </button>
          </div>
        </div>
        <div className="col-8 mx-auto mb-5">
          <ExpansesList data={expansesData} />
        </div>
      </div>
    </div>
  );
}

export default Expanses;
