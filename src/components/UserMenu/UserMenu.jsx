import { useSelector } from 'react-redux';
import { selectUserName } from '@redux/auth/selectors';

const UserMenu = () => {
  const user = useSelector(selectUserName);

  return (
    <div>
      <p>Welcome, {user}</p>
      <button type="button">Logout</button>
    </div>
  );
};
export default UserMenu;
