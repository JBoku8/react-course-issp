const ListItem = ({ user }) => {
  return (
    <div className="card mb-2">
      <h3 className="card-title">
        {user.firstname} {user.lastname}
      </h3>
    </div>
  );
};

export default ListItem;
