import SortUser from '../features/SortUser';

function SortButtons() {
  // const [currSort, setCurrSort] = useState('');
  // const [sortState, setSortState] = useState('');
  // const sortingButtons = [
  //   'Twubric Score',
  //   'Friends',
  //   'Influence',
  //   'Chirpiness',
  // ];
  // function handleSort(buttonName) {
  //   if (sortState === '' && currSort !== buttonName) {
  //     setSortState('ascending');
  //     setCurrSort(buttonName);
  //   }
  //   if (sortState === 'ascending') {
  //     setSortState('descending');
  //   }
  //   if (sortState === 'descending') {
  //     setSortState('');
  //     setCurrSort('');
  //   }
  // }
  return (
    <div className="mx-auto w-3/4 flex flex-col md:flex-row border-black border-2">
      <SortUser sortBy="total">Twubric Score</SortUser>
      <SortUser sortBy="friends">Friends</SortUser>
      <SortUser sortBy="influence">Influence</SortUser>
      <SortUser sortBy="chirpiness">Chirpiness</SortUser>
    </div>
  );
}

export default SortButtons;
