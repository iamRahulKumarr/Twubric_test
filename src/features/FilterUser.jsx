import { useState } from 'react';
import Button from '../ui/Button';
import { useDispatch } from 'react-redux';
import { filterUserByDate } from '../redux/slice/userSlice';

function FilterUser() {
  const dispatch = useDispatch();
  const [dates, setDates] = useState({
    start: '',
    end: '',
  });
  function handleChange(e) {
    setDates({ ...dates, [e.target.name]: e.target.value });
  }
  return (
    <div className="w-3/4 mx-auto flex justify-evenly items-center pt-5">
      <span>
        Start:{' '}
        <input
          type="date"
          name="start"
          value={dates.start}
          onChange={handleChange}
          max={new Date().toISOString().split('T')[0]}
        />
      </span>
      <span>
        End:{' '}
        <input
          type="date"
          name="end"
          value={dates.end}
          onChange={handleChange}
          min={new Date(dates.start || null).toISOString().split('T')[0]}
          max={new Date().toISOString().split('T')[0]}
          disabled={dates.start === '' ? true : false}
        />
      </span>
      <Button
        type="filter"
        onClick={() => {
          dispatch(filterUserByDate(dates));
          setDates({ start: '', end: '' });
        }}
      >
        Filter
      </Button>
    </div>
  );
}

export default FilterUser;
