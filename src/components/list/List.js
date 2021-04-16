import ListItem from "./ListItem";
import { usersList } from "../../data";

function List(props) {
  const demo = () => {
    return [3, 5];
  };

  return (
    <div className="row bg-light p-4">
      <h3>List Demo</h3>
      <h5>{demo()}</h5>
      {usersList.data.map((user) => {
        return <ListItem user={user} key={user.uuid} />;
      })}
    </div>
  );
}

export default List;
