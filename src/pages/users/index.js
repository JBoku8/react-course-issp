import { useState } from 'react';
import { List } from '../../components/list';
import Spinner from '../../components/spinner';
import { Button } from '../../components/ui';
import { useBackgroundColor } from '../../hooks/useBackgroundColor';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

function Users(props) {
  const [showUserList, setShowUserList] = useState(false);
  const [loading, setLoading] = useState(false);
  const [, setPageTitle] = useDocumentTitle('Users page');
  const [, setBgColor] = useBackgroundColor();

  const onLoadUsers = () => {
    setLoading(true);
    setShowUserList(false);
    setPageTitle('Users loading...');
    setBgColor('yellow');
    setTimeout(() => {
      setShowUserList(true);
      setLoading(false);
      setPageTitle('Users list');
      setBgColor('seagreen');
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
