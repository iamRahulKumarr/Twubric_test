/*eslint-disable react/prop-types */

import RemoveUser from '../features/RemoveUser';

function Card({ userInfo }) {
  return (
    <div className="border-2 border-black" key={userInfo.uid}>
      <div className="p-3 flex items-center gap-2">
        <img className="h-12 rounded-full" src={userInfo.image} />
        <p className="grow">{userInfo.username}</p>
        <span className="font-semibold">{userInfo.twubric.total}</span>
      </div>
      <div className="flex border-black border-b border-t items-center text-center p-3 text-sm">
        <p className="grow border-r border-black">
          <span className="block font-semibold">
            {userInfo.twubric.friends}
          </span>
          Friends
        </p>
        <p className="grow border-r border-black">
          <span className="block font-semibold">
            {userInfo.twubric.influence}
          </span>
          Influence
        </p>
        <p className="grow">
          <span className="block font-semibold">
            {userInfo.twubric.chirpiness}
          </span>
          Chirpiness
        </p>
      </div>
      <div className="flex p-3 items-center justify-between">
        <p>
          {new Date(userInfo.join_date).toLocaleDateString('en-us', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
          })}
        </p>
        <RemoveUser uid={userInfo.uid} />
      </div>
    </div>
  );
}

export default Card;
