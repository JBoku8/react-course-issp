import { useState } from 'react';

// import { ExpansesFilter } from '../../components/filters/ExpansesFilter';
import { ExpansesList } from '../../components/list';
import ExpansesForm from '../../components/forms/expanses-form';
import { expansesContext } from '../../contexts/expansesContext';
import { expansesList } from '../../data';
import { SORT_TYPE } from '../../utils';

function Expanses() {
  const [expansesData, setExpansesData] = useState(expansesList);
  const [selectedExpanse, setSelectedExpanse] = useState(null);

  const onExpanseSubmit = (data) => {
    if (selectedExpanse) {
      // update
      const index = expansesData.findIndex((item) => item.id === selectedExpanse.id);
      const leftData = expansesData.slice(0, index);
      const updatedItem = {
        ...expansesData[index],
        ...data,
      };
      const rightData = expansesData.slice(index + 1);

      setExpansesData([...leftData, updatedItem, ...rightData]);

      setSelectedExpanse(null);
    } else {
      setExpansesData([...expansesData, data]);
    }
  };

  const onSortHandler = (sortBy) => {
    let sorted = [...expansesData];
    if (sortBy === SORT_TYPE.ASC) {
      sorted = sorted.sort((a, b) => a.amount - b.amount);
    } else if (sortBy === SORT_TYPE.DESC) {
      sorted = sorted.sort((a, b) => b.amount - a.amount);
    }

    setExpansesData(sorted);
  };

  return (
    <expansesContext.Provider
      value={{
        onExpanseSubmit,
        selectedExpanse,
        setSelectedExpanse,
        onSortHandler,
        expansesData,
      }}>
      <div className="expanses container">
        <div className="row mt-5">
          <h2 className="col-4 mx-auto text-muted text-center">ჩემი ხარჯები</h2>
          <hr />
        </div>
        <div className="row mt-3">
          <div className="col-6 mx-auto">
            <ExpansesForm />
          </div>
        </div>
        <div className="row mt-3">
          {/* <ExpansesFilter /> */}
          <div className="col-8 mx-auto mb-5">
            <ExpansesList />
          </div>
        </div>
      </div>
    </expansesContext.Provider>
  );
}

export default Expanses;
