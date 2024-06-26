import CardList from './ui/CardList';
import SortButtons from './ui/SortButtons';

function App() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-white text-stroke text-center">
        Twubric
      </h1>
      {/* <div className="mx-auto w-3/4 flex border-black border-2">
        <button className="grow py-3">Twubric Score &uarr;</button>
        <button className="grow py-3">Friends &darr;</button>
        <button className="grow py-3">Influence</button>
        <button className="grow py-3">Chirpiness</button>
      </div> */}
      <SortButtons />
      <CardList />
    </div>
  );
}

export default App;
