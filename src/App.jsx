import { useSelector } from 'react-redux';
import CardList from './ui/CardList';
import SortButtons from './ui/SortButtons';
import { getUserState } from './redux/slice/userSlice';
import FilterUser from './features/FilterUser';

function App() {
  const { error, status } = useSelector(getUserState);
  return (
    <div>
      <h1 className="text-4xl font-bold text-white text-stroke text-center my-5">
        Twubric
      </h1>
      <SortButtons />
      <FilterUser />
      {status === 'loading' && (
        <p className="mx-auto w-2/4 text-center text-3xl text-white font-bold text-stroke mt-5">
          Loading...
        </p>
      )}
      {status === 'error' ? (
        <p className="mx-auto w-2/4 text-center text-3xl text-white font-bold text-stroke mt-5">
          {error}!
        </p>
      ) : (
        <CardList />
      )}
    </div>
  );
}

export default App;
