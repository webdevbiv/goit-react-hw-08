import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from '@redux/auth/selectors';
import { logout } from '@redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserName);

  const handleLogout = () => dispatch(logout());

  return (
    <div>
      <p>Welcome, {user}</p>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
