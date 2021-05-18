import { useHistory } from 'react-router';
import ExpansesForm from '../../components/forms/expanses-form';
import { ExpansesList } from '../../components/list';
import { logOut } from '../../services';
import { USERS_PATH } from '../../paths';

function Expanses() {
  const history = useHistory();

  const onLogOut = async () => {
    await logOut();

    history.replace(USERS_PATH);
  };

  return (
    <div className="expanses container">
      <div className="row mt-5">
        <h2 className="col-4 mx-auto text-muted text-center">ჩემი ხარჯები</h2>
        <hr />
        <div className="col-2">
          <button className="btn btn-primary" onClick={onLogOut}>
            Log Out
          </button>
        </div>
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
