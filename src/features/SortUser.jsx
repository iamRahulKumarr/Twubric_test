/*eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';

import {
  sortByChirpiness,
  sortByFriends,
  sortByInfluence,
  sortByTotal,
} from '../redux/slice/userSlice';

import Button from '../ui/Button';

function SortUser({ sortBy, children }) {
  const dispatch = useDispatch();

  if (sortBy === 'total') {
    return <Button onClick={() => dispatch(sortByTotal())}>{children}</Button>;
  }
  if (sortBy === 'friends') {
    return (
      <Button onClick={() => dispatch(sortByFriends())}>{children}</Button>
    );
  }
  if (sortBy === 'influence') {
    return (
      <Button onClick={() => dispatch(sortByInfluence())}>{children}</Button>
    );
  }
  if (sortBy === 'chirpiness') {
    return (
      <Button onClick={() => dispatch(sortByChirpiness())}>{children}</Button>
    );
  }
}

export default SortUser;
