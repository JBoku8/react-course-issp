import { ExpansesList } from '../../components/list';
import ExpansesForm from '../../components/forms/expanses-form';

function Expanses() {
  return (
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
        <div className="col-8 mx-auto mb-5">
          <ExpansesList />
        </div>
      </div>
    </div>
  );
}

export default Expanses;
