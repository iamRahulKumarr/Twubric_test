import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchUsers, getUserState } from '../redux/slice/userSlice';

import Card from './Card';

function CardList() {
  const { users } = useSelector(getUserState);
  const dispatch = useDispatch();

  useEffect(
    function () {
      dispatch(fetchUsers());
    },
    [dispatch]
  );
  return (
    <div className="grid grid-cols-3 gap-4 mt-4 w-3/4 mx-auto">
      {users.map((user) => (
        <Card key={user.uid} userInfo={user} />
      ))}
    </div>
  );
}

export default CardList;
