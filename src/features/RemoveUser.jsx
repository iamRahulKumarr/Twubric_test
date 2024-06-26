/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';

import Button from '../ui/Button';
import { removeUser } from '../redux/slice/userSlice';

function RemoveUser({ uid }) {
  const dispatch = useDispatch();
  return (
    <Button type="remove" onClick={() => dispatch(removeUser(uid))}>
      Remove
    </Button>
  );
}

export default RemoveUser;
