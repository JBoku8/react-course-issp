import { useState } from "react";
import List from "../../components/list";
import Spinner from "../../components/spinner";
import { Button } from "../../components/ui";

function Users(props) {
  const [showUserList, setShowUserList] = useState(false);
  const [loading, setLoading] = useState(false);

  const onLoadUsers = () => {
    setLoading(true);
    setShowUserList(false);
    setTimeout(() => {
      setShowUserList(true);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="row">
      <h2 className="text-muted">Users Page</h2>
      <Button
        className="btn btn-primary"
        onClick={onLoadUsers}
        disabled={loading}
        text="Load Users"
      />
      {showUserList && <List />}
      {loading && <Spinner />}
    </div>
  );
}

export default Users;
